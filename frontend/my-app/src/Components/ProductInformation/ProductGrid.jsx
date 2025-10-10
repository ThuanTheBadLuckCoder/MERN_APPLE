import React from 'react';

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>Không có sản phẩm nào.</div>;
    }

    console.log(products); 

    // ✅ Gom nhóm sản phẩm theo name + macType
    const groupedProducts = Object.values(
        products.reduce((acc, product) => {
            const key = `${product.name}-${product.macType}`;
            if (!acc[key]) {
                acc[key] = {
                    ...product,
                    screenSizes: [],
                    beautyScreenSize: [],
                };
            }
            if (product.screenSize && !acc[key].screenSizes.includes(product.screenSize)) {
                acc[key].screenSizes.push(product.screenSize.toString().replace('.', ','));
                const remainder = (product.screenSize * 10) % 10;
                let beautyScreenSize = product.screenSize - remainder / 10;
                acc[key].beautyScreenSize.push(beautyScreenSize);
            }
            return acc;
        }, {})
    );

    // Component for Laptop content
    const LaptopContent = ({ screenSizes, screenInfo, chipImgSrc, chip, batteryLife }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "10px", 
            height: "100%",
            minHeight: "300px" // Ensure minimum height for consistency
        }}>
            <h3 style={{ fontSize: "28px", minHeight: "36px", display: "flex", alignItems: "center" }}>
                {screenSizes?.length > 0 && `${screenSizes.join('" và ')}"`}
            </h3>
            <div style={{ 
                minHeight: "48px", 
                display: "flex", 
                alignItems: "center", 
                textAlign: "center",
                width: "100%",
                justifyContent: "center",
            }}>
                <p style={{ fontSize: "12px", lineHeight: "16px", margin: 0 }}>{screenInfo}</p>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "120px" }}>
                <img src={chipImgSrc} alt={`Chip ${chip}`} style={{ marginTop: '10px' }} />
                <span style={{ fontSize: "12px", lineHeight: "16px", textAlign: "center", marginTop: "10px" }}>Thời lượng pin lên đến 
                    <p style={{ fontSize: "40px", fontWeight: "600", margin: "5px 0 0 0"}}>{batteryLife}</p>
                </span>
            </div>
        </div>
    );

    // Component for Desktop content
    const DesktopContent = ({ chip, chipImgSrc, ramInfo, storageInfo }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "10px", 
            height: "100%",
            minHeight: "300px",
            justifyContent: "center"
        }}>
            <p>DesktopContent</p>
            <img src={chipImgSrc} alt={`Chip ${chip}`} style={{ marginBottom: '15px', height: '80px' }} />
            <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>Chip {chip}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "center" }}>
                {ramInfo && <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>{ramInfo}</p>}
                {storageInfo && <p style={{ fontSize: "14px", color: "#555", margin: 0 }}>{storageInfo}</p>}
            </div>
        </div>
    );

    // Component for Monitor content
    const MonitorContent = ({ screenSizes, resolution, refreshRate, panelType }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            gap: "15px", 
            height: "100%",
            minHeight: "300px",
            justifyContent: "center"
        }}>
            <h3 style={{ fontSize: "28px", minHeight: "36px", display: "flex", alignItems: "center" }}>
                Màn hình {screenSizes?.length > 0 && `${screenSizes.join('" và ')}"`}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", textAlign: "center", flex: 1, justifyContent: "center" }}>
                {resolution && (
                    <p style={{ fontSize: "14px", margin: 0 }}>
                        <strong>Độ phân giải:</strong> {resolution}
                    </p>
                )}
                {refreshRate && (
                    <p style={{ fontSize: "14px", margin: 0 }}>
                        <strong>Tần số quét:</strong> {refreshRate}
                    </p>
                )}
                {panelType && (
                    <p style={{ fontSize: "14px", margin: 0 }}>
                        <strong>Loại tấm nền:</strong> {panelType}
                    </p>
                )}
            </div>
        </div>
    );

    // Function to render appropriate content based on category
    const renderCustomContent = (product) => {
        switch (product.productType) {
            case 'Máy Tính Xách Tay':
                return (
                    <LaptopContent
                        screenSizes={product.screenSizes}
                        screenInfo={product.screenInfo}
                        chipImgSrc={product.chipImgSrc}
                        chip={product.chip}
                        batteryLife={product.batteryLife}
                    />
                );
            case 'Máy Tính Để Bàn':
                return (
                    <DesktopContent
                        chip={product.chip}
                        chipImgSrc={product.chipImgSrc}
                        ramInfo={product.ramInfo}
                        storageInfo={product.storageInfo}
                    />
                );
            case 'Màn Hình':
                return (
                    <MonitorContent
                        screenSizes={product.screenSizes}
                        resolution={product.resolution}
                        refreshRate={product.refreshRate}
                        panelType={product.panelType}
                    />
                );
            default:
                // Fallback to laptop content if category is not specified
                return (
                    <LaptopContent
                        screenSizes={product.screenSizes}
                        screenInfo={product.screenInfo}
                        chipImgSrc={product.chipImgSrc}
                        chip={product.chip}
                    />
                );
        }
    };

    return (
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, 405px)", 
            gap: "0", 
            alignItems: "start", // Changed from stretch to start
            gridAutoRows: "1fr" // This ensures all rows have equal height
        }}>
            {groupedProducts.map((product, i) => (
                <div
                    key={i}
                    style={{
                        width: "405px",
                        background: "#ffffff00",
                        textAlign: "center",
                        lineHeight: "1.5",
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "100%", // Take full height of grid cell
                        height: "100%", // Ensure it fills the grid cell
                    }}
                >
                    {/* Common content - always the same */}
                    <div style={{ borderBottom: '1px solid #ccc', padding: "15px 15px 40px 15px" }}>
                        {product.imgSrc && (
                            <img
                                src={product.imgSrc}
                                alt={`${product.name} ${product.macType}`}
                                style={{
                                    width: "100%",
                                    borderRadius: "10px",
                                    marginBottom: "10px",
                                }}
                            />
                        )}

                        <h3 style={{ fontSize: "28px" }}>
                            {product.name} {product.macType}{" "}
                            {product.beautyScreenSize?.length > 0 && `${product.beautyScreenSize.join('" và ')}"`}
                        </h3>

                        <p style={{ fontWeight: 'bold' }}>Chip {product.chip}</p>

                        {product.generalInfo && (
                            <p style={{ fontSize: "17px", color: "#272727ff", padding: "0 28px", margin: '16px' }}>
                                {product.generalInfo}
                            </p>
                        )}

                        {product.price && (
                            <p style={{ color: "#555", fontWeight: "bold", fontSize: "17px", padding: "0 28px", margin: '16px' }}>
                                Từ {product.price.toLocaleString()}₫ hoặc {(product.price / 24).toLocaleString()}₫/th. trong 24 tháng*
                            </p>
                        )}
                    </div>

                    {/* Custom content based on category */}
                    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                        {renderCustomContent(product)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;