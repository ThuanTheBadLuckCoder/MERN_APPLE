import React from 'react';
import PortSummary from './PortSummary';

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>Không có sản phẩm nào.</div>;
    }

    // ✅ Gom nhóm sản phẩm theo name + macType
    const groupedProducts = Object.values(
        products.reduce((acc, product) => {
            const key = `${product.name}-${product.macType}`;
            if (!acc[key]) {
                acc[key] = {
                    ...product,
                    screenSizes: [],
                    beautyScreenSize: [],
                    weights: [],
                    connectionPort: product.connectionPort || {},
                    totalPort: product.totalPort || 0,
                };
            }
            if (product.screenSize && !acc[key].screenSizes.includes(product.screenSize)) {
                acc[key].screenSizes.push(product.screenSize.toString().replace('.', ','));
                const remainder = (product.screenSize * 10) % 10;
                let beautyScreenSize = product.screenSize - remainder / 10;
                acc[key].beautyScreenSize.push(beautyScreenSize);
            }
            if (product.weight && !acc[key].weights.includes(product.weight)) {
                acc[key].weights.push(product.weight);
            }
            if (product.connectionPort) {
                acc[key].connectionPort = {
                    ...acc[key].connectionPort,
                    ...product.connectionPort
                };
                // Calculate total ports correctly
                const totalPort = Object.values(acc[key].connectionPort).reduce((sum, count) => {
                    return typeof count === 'number' ? sum + count : sum;
                }, 0);
                acc[key].totalPort = totalPort;
            }
            return acc;
        }, {})
    );

    // Component for Laptop content with equal height algorithm
    const LaptopContent = ({ screenSizes, screenInfo, chipImgSrc, chip, batteryLife, weights, totalPort, connectionPorts, appleIntelligence }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "grid", 
            gridTemplateRows: "auto 1fr auto auto auto", // Equal height sections
            alignItems: "stretch", 
            gap: "12px",
            height: "100%",
            minHeight: "500px" // Increased minimum height to accommodate Apple Intelligence section
        }}>
            {/* Screen sizes - fixed height */}
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                minHeight: "40px",
                height: "40px" // Fixed height to ensure consistency
            }}>
                <h3 style={{ fontSize: "28px", margin: 0 }}>
                    {screenSizes?.length > 0 && `${screenSizes.join('" và ')}"`}
                </h3>
            </div>
            
            {/* Screen info - fixed height container to ensure equal heights */}
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                textAlign: "center",
                padding: "8px 0",
                minHeight: "80px", // Fixed height to ensure consistency
                height: "80px" // Force exact height
            }}>
                <p style={{ 
                    fontSize: "12px", 
                    lineHeight: "1.4", 
                    margin: 0,
                    maxWidth: "100%",
                    wordWrap: "break-word"
                }}>
                    {screenInfo}
                </p>
            </div>
            
            {/* Chip, battery and Apple Intelligence - fixed height container to ensure equal heights */}
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                gap: "8px",
                flex: 1,
                minHeight: "180px",
                height: "180px" // Increased height to accommodate weight information
            }}>
                <img src={chipImgSrc} alt={`Chip ${chip}`} style={{ height: '80px' }} />
                <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "12px", lineHeight: "1.4" }}>Thời lượng pin lên đến</span>
                    <p style={{ fontSize: "40px", fontWeight: "600", margin: "5px 0 0 0"}}>{batteryLife}</p>
                </div>
            </div>
            
            
            
            {/* Ports - fixed height */}
            <div style={{ 
                minHeight: "60px", 
                height: "140px", // Fixed height to ensure consistency
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}>
                <PortSummary 
                    totalPorts={totalPort} 
                    connectionPorts={connectionPorts}
                    showDetails={true}
                />
                
            </div>
            
            {weights && weights.length > 0 && (
                    <div style={{ textAlign: "center", marginTop: "4px" }}>
                        <p style={{ fontSize: "16px", lineHeight: "1.3", color: "#666" }}>Trọng lượng</p>
                        <span style={{ fontSize: "32px", lineHeight: "1.3", color: "#000", fontWeight: "700" }}>
                            {weights.length === 1 
                                ? `${weights[0]} kg`
                                : `${weights.join(' kg hoặc ')} kg`
                            }
                        </span>
                    </div>
                )}
                {/* Apple Intelligence - fixed height */}
            {appleIntelligence && (
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    justifyContent: "center",
                    gap: "8px",
                    minHeight: "80px",
                    height: "80px" // Fixed height to ensure consistency
                }}>
                    <img 
                        src="https://www.apple.com/assets-www/en_WW/mac/tout_table/apple.intelligence_elevated_f063342ae.svg" 
                        alt="Apple Intelligence" 
                        style={{ height: '40px' }} 
                    />
                    <p style={{ 
                        fontSize: "12px", 
                        textAlign: "center", 
                        margin: 0,
                        color: "#666"
                    }}>
                        Equipped for Apple Intelligence
                    </p>
                </div>
            )}
        </div>
    );

    // Component for Desktop content with equal height algorithm
    const DesktopContent = ({ chip, chipImgSrc, ramInfo, storageInfo, totalPort, connectionPorts }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "grid", 
            gridTemplateRows: "auto auto 1fr auto", // Equal height sections
            alignItems: "stretch", 
            gap: "12px",
            height: "100%",
            minHeight: "400px" // Minimum height for consistency
        }}>
            {/* Chip image - fixed height */}
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                minHeight: "80px",
                height: "80px" // Fixed height to ensure consistency
            }}>
                <img src={chipImgSrc} alt={`Chip ${chip}`} style={{ height: '80px' }} />
            </div>
            
            {/* Chip title - fixed height */}
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                minHeight: "40px",
                height: "40px" // Fixed height to ensure consistency
            }}>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", margin: 0 }}>Chip {chip}</h3>
            </div>
            
            {/* RAM and Storage info - fixed height container to ensure equal heights */}
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                gap: "8px", 
                textAlign: "center", 
                flex: 1,
                minHeight: "120px",
                height: "120px", // Fixed height to ensure consistency
                padding: "8px 0"
            }}>
                {ramInfo && (
                    <p style={{ 
                        fontSize: "14px", 
                        color: "#555", 
                        margin: 0,
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        wordWrap: "break-word"
                    }}>
                        {ramInfo}
                    </p>
                )}
                {storageInfo && (
                    <p style={{ 
                        fontSize: "14px", 
                        color: "#555", 
                        margin: 0,
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        wordWrap: "break-word"
                    }}>
                        {storageInfo}
                    </p>
                )}
            </div>
            
            {/* Ports - fixed height */}
            <div style={{ 
                minHeight: "60px", 
                height: "60px", // Fixed height to ensure consistency
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}>
                <PortSummary 
                    totalPorts={totalPort} 
                    connectionPorts={connectionPorts}
                    showDetails={true}
                />
            </div>
        </div>
    );

    // Component for Monitor content with equal height algorithm
    const MonitorContent = ({ screenSizes, resolution, refreshRate, panelType, totalPort, connectionPorts }) => (
        <div style={{ 
            padding: "40px 15px 15px 15px", 
            display: "grid", 
            gridTemplateRows: "auto 1fr auto", // Equal height sections
            alignItems: "stretch", 
            gap: "12px",
            height: "100%",
            minHeight: "400px" // Minimum height for consistency
        }}>
            {/* Screen title - fixed height */}
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                minHeight: "40px",
                height: "40px" // Fixed height to ensure consistency
            }}>
                <h3 style={{ fontSize: "28px", margin: 0 }}>
                    Màn hình {screenSizes?.length > 0 && `${screenSizes.join('" và ')}"`}
                </h3>
            </div>
            
            {/* Monitor specs - fixed height container to ensure equal heights */}
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                gap: "8px", 
                textAlign: "center", 
                flex: 1,
                minHeight: "120px",
                height: "120px", // Fixed height to ensure consistency
                padding: "8px 0"
            }}>
                {resolution && (
                    <p style={{ 
                        fontSize: "14px", 
                        margin: 0,
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        wordWrap: "break-word"
                    }}>
                        <strong>Độ phân giải:</strong> {resolution}
                    </p>
                )}
                {refreshRate && (
                    <p style={{ 
                        fontSize: "14px", 
                        margin: 0,
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        wordWrap: "break-word"
                    }}>
                        <strong>Tần số quét:</strong> {refreshRate}
                    </p>
                )}
                {panelType && (
                    <p style={{ 
                        fontSize: "14px", 
                        margin: 0,
                        lineHeight: "1.4",
                        maxWidth: "100%",
                        wordWrap: "break-word"
                    }}>
                        <strong>Loại tấm nền:</strong> {panelType}
                    </p>
                )}
            </div>
            
            {/* Ports - fixed height */}
            <div style={{ 
                minHeight: "60px", 
                height: "60px", // Fixed height to ensure consistency
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}>
                <PortSummary 
                    totalPorts={totalPort} 
                    connectionPorts={connectionPorts}
                    showDetails={true}
                />
            </div>
        </div>
    );

    // Function to render appropriate content based on category
    const renderCustomContent = (product) => {
        const commonProps = {
            totalPort: product.totalPort,
            connectionPorts: product.connectionPort
        };

        switch (product.productType) {
            case 'Máy Tính Xách Tay':
                return (
                    <LaptopContent
                        screenSizes={product.screenSizes}
                        screenInfo={product.screenInfo}
                        chipImgSrc={product.chipImgSrc}
                        chip={product.chip}
                        batteryLife={product.batteryLife}
                        weights={product.weights}
                        appleIntelligence={product.appleIntelligence}
                        {...commonProps}
                    />
                );
            case 'Máy Tính Để Bàn':
                return (
                    <DesktopContent
                        chip={product.chip}
                        chipImgSrc={product.chipImgSrc}
                        ramInfo={product.ramInfo}
                        storageInfo={product.storageInfo}
                        {...commonProps}
                    />
                );
            case 'Màn Hình':
                return (
                    <MonitorContent
                        screenSizes={product.screenSizes}
                        resolution={product.resolution}
                        refreshRate={product.refreshRate}
                        panelType={product.panelType}
                        {...commonProps}
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
                        weights={product.weights}
                        appleIntelligence={product.appleIntelligence}
                        {...commonProps}
                    />
                );
        }
    };

    return (
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, 405px)", 
            gap: "0", 
            alignItems: "stretch", // Forces all grid items to stretch to same height
            gridAutoRows: "1fr", // Each row takes equal height
            justifyItems: "stretch"
        }}>
            {groupedProducts.map((product, i) => (
                <div
                    key={i}
                    style={{
                        width: "405px",
                        background: "#ffffff00",
                        textAlign: "center",
                        lineHeight: "1.5",
                        display: "grid", 
                        gridTemplateRows: "auto 1fr", // Header + flexible content
                        height: "100%", // Take full height of grid cell
                        minHeight: "720px", // Increased minimum height to accommodate Apple Intelligence section
                        alignSelf: "stretch" // Force this card to stretch to row height
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
                    <div style={{ 
                        display: "flex", 
                        flexDirection: "column", 
                        flex: 1, 
                        minHeight: 0,
                        height: "100%" // Take full height of the grid cell
                    }}>
                        {renderCustomContent(product)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;