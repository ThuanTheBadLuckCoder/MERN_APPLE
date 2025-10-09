import React, { useState, useMemo } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductGrid from './ProductGrid';
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
