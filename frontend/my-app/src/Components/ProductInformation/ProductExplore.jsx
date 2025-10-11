import React, { useState, useMemo } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductGrid from './ProductGrid';
import PortSummary from './PortSummary';
import Tabs from '../Tabs';

const ProductExplore = ({ 
    categoriesProducts, 
    title = "Khám phá dòng sản phẩm.",
    compareText = "So sánh tất cả các phiên bản",
    renderContent // ✅ hàm render tùy chỉnh theo từng trang
}) => {
    if (!categoriesProducts) return null;

    const { groupedProducts } = useMemo(() => {
        const allProducts = Object.values(categoriesProducts).flat();
        const productTypes = [...new Set(allProducts.map(p => p.productType))];

        const grouped = productTypes.map(type => {
            const items = allProducts.filter(p => p.productType === type);
            const uniqueByModel = [];
            const seen = new Set();

            for (const item of items) {
                const key = `${item.name}-${item.macType}-${item.screenSize}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    uniqueByModel.push(item);
                }
            }

            return { type, items: uniqueByModel };
        });

        return { groupedProducts: grouped };
    }, [categoriesProducts]);

    const [activeTab, setActiveTab] = useState(groupedProducts[0]?.type || '');
    const activeGroup = groupedProducts.find(g => g.type === activeTab);

    // Calculate category-level port summary
    const categoryPortSummary = useMemo(() => {
        if (!activeGroup?.items) return null;
        
        const totalPorts = activeGroup.items.reduce((sum, product) => {
            return sum + (product.totalPort || 0);
        }, 0);

        // Aggregate all connection ports from products in this category
        const aggregatedPorts = activeGroup.items.reduce((acc, product) => {
            if (product.connectionPort) {
                Object.entries(product.connectionPort).forEach(([portType, count]) => {
                    if (typeof count === 'number') {
                        acc[portType] = (acc[portType] || 0) + count;
                    }
                });
            }
            return acc;
        }, {});

        return {
            totalPorts,
            connectionPorts: aggregatedPorts,
            productCount: activeGroup.items.length
        };
    }, [activeGroup]);
    
    return (
        <div id="product-explore" className="w-full flex flex-col items-center justify-center py-10 px-5 bg-[#f5f5f7]">
            <div className="w-full max-w-[1680px]">
                {/* Header */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                        gap: '20px',
                    }}
                >
                    <h2>{title}</h2>
                    <button
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            lineHeight: '28px',
                            cursor: 'pointer'
                        }}
                    >
                        {compareText} <KeyboardArrowRightIcon />
                    </button>
                </div>

                {/* Tabs */}
                <Tabs
                    tabs={groupedProducts.map(g => g.type)}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    tabListStyle={{
                        justifyContent: "center",
                        gap: "0px",
                        background: "#dddddd",
                        borderRadius: "9999px",
                    }}
                    tabItemStyle={{
                        fontWeight: 500,
                        fontSize: "16px"
                    }}
                    activeTabItemStyle={{
                        background: "black",
                        color: "white"
                    }}
                />

                {/* Category Port Summary */}
                {categoryPortSummary && (
                    <div style={{ 
                        marginTop: '20px',
                        padding: '15px',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '1px solid #e5e5e7'
                    }}>
                        <h3 style={{ 
                            fontSize: '18px', 
                            fontWeight: '600', 
                            margin: '0 0 10px 0',
                            textAlign: 'center',
                            color: '#1d1d1f'
                        }}>
                            Tổng quan cổng kết nối - {activeTab}
                        </h3>
                        <PortSummary 
                            totalPorts={categoryPortSummary.totalPorts}
                            connectionPorts={categoryPortSummary.connectionPorts}
                            showDetails={true}
                            style={{
                                backgroundColor: 'transparent',
                                padding: '0'
                            }}
                        />
                        <p style={{ 
                            fontSize: '12px', 
                            color: '#6e6e73', 
                            textAlign: 'center',
                            margin: '8px 0 0 0'
                        }}>
                            Dựa trên {categoryPortSummary.productCount} sản phẩm trong danh mục
                        </p>
                    </div>
                )}

                {/* Nội dung tab (tuỳ biến theo từng trang) */}
                <div style={{ marginTop: '20px' }}>
                    {renderContent 
                        ? renderContent(activeGroup?.items || []) // ✅ gọi renderContent nếu có
                        : <ProductGrid products={activeGroup?.items || []} />} {/* Mặc định */}
                </div>
            </div>
        </div>
    );
};

export default ProductExplore;
