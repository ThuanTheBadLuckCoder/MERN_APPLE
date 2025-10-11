import React, { useState, useEffect, useRef, useMemo } from 'react';
import PortSummary from './PortSummary';

const ProductGrid = ({ products }) => {
    const [stickyHeaders, setStickyHeaders] = useState({});
    const [cardPositions, setCardPositions] = useState({});
    const gridRef = useRef(null);
    const headerRefs = useRef({});
    const cardRefs = useRef({});
    const previousStickyHeaders = useRef({});

    if (!products || products.length === 0) {
        return <div>Không có sản phẩm nào.</div>;
    }

    // ✅ Gom nhóm sản phẩm theo name + macType - Memoized to prevent infinite loops
    const groupedProducts = useMemo(() => {
        return Object.values(
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
    }, [products]);

    // Scroll detection and sticky header logic
    useEffect(() => {
        const handleScroll = () => {
            // If user scrolls back to the very top, clear all sticky headers
            if (window.scrollY <= 100) {
                const clearedHeaders = {};
                Object.keys(previousStickyHeaders.current).forEach(key => {
                    clearedHeaders[key] = false;
                });
                setStickyHeaders(clearedHeaders);
                previousStickyHeaders.current = clearedHeaders;
                return;
            }

            const newStickyHeaders = { ...previousStickyHeaders.current };

            groupedProducts.forEach((product, index) => {
                const headerRef = headerRefs.current[index];
                const cardRef = cardRefs.current[index];

                if (headerRef && cardRef) {
                    const rect = headerRef.getBoundingClientRect();
                    const headerHeight = headerRef.offsetHeight;

                    // Show sticky header when 3/4 of the original header is scrolled out of view
                    const threshold = headerHeight * 0.75;
                    const shouldShowSticky = rect.top <= -threshold;

                    // Check if the original header is coming back into view from above
                    const isHeaderComingBack = rect.top > -threshold && rect.top < window.innerHeight;

                    // Use previous state from ref to avoid dependency issues
                    const wasSticky = previousStickyHeaders.current[index];

                    // Only hide sticky header if the original header is visible again
                    if (wasSticky && isHeaderComingBack) {
                        newStickyHeaders[index] = false;
                    } else if (shouldShowSticky) {
                        newStickyHeaders[index] = true;
                    }
                    // If wasSticky is true and we're not coming back, keep it true (don't change)
                    // This ensures sticky headers persist even when scrolling past the section
                } else {
                    // If headerRef is not available (scrolled past section), maintain current sticky state
                    // This prevents sticky headers from disappearing when scrolling far down
                    newStickyHeaders[index] = previousStickyHeaders.current[index] || false;
                }
            });

            // Update card positions for sticky header positioning
            const newCardPositions = {};
            groupedProducts.forEach((product, index) => {
                const cardRef = cardRefs.current[index];
                if (cardRef) {
                    const rect = cardRef.getBoundingClientRect();
                    newCardPositions[index] = rect.left;
                }
            });

            // Only update if there are actual changes to prevent unnecessary re-renders
            const hasChanges = Object.keys(newStickyHeaders).some(key =>
                newStickyHeaders[key] !== previousStickyHeaders.current[key]
            );

            const hasPositionChanges = Object.keys(newCardPositions).some(key =>
                newCardPositions[key] !== cardPositions[key]
            );

            if (hasChanges || hasPositionChanges) {
                setStickyHeaders(newStickyHeaders);
                setCardPositions(newCardPositions);
                previousStickyHeaders.current = newStickyHeaders;
            }
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        handleScroll(); // Initial check

        // Cleanup function to clear sticky headers when component unmounts
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
            // Clear all sticky headers when component unmounts
            setStickyHeaders({});
            previousStickyHeaders.current = {};
        };
    }, [groupedProducts]);

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
                    <span style={{ fontSize: "14px", lineHeight: "1.4" }}>Thời lượng pin lên đến</span>
                    <p style={{ fontSize: "40px", fontWeight: "600", margin: "5px 0 0 0" }}>{batteryLife}</p>
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
                    <p style={{ fontSize: "16px", lineHeight: "1.3", color: "#000" }}>Trọng lượng</p>
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
                        fontSize: "14px",
                        textAlign: "center",
                        margin: 0,
                        color: "#000"
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
        <>
            <div id="ProductGrid-1" ref={gridRef} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 405px)",
                gap: "0",
                alignItems: "stretch", // Forces all grid items to stretch to same height
                gridAutoRows: "1fr", // Each row takes equal height
                justifyItems: "stretch"
            }}>
                {groupedProducts.map((product, i) => (
                    <div key={i} style={{
                        width: "100%",
                    }}>
                        <div
                            ref={el => cardRefs.current[i] = el}
                            style={{
                                width: "405px",
                                background: "#ffffff00",
                                textAlign: "center",
                                lineHeight: "1.5",
                                display: "grid",
                                gridTemplateRows: "auto 1fr", // Header + flexible content
                                height: "100%", // Take full height of grid cell
                                minHeight: "720px", // Increased minimum height to accommodate Apple Intelligence section
                                alignSelf: "stretch", // Force this card to stretch to row height
                                position: "relative" // For sticky header positioning
                            }}
                        >
                            {/* Common content - always the same */}
                            <div
                                id="ProductGridHeader"
                                ref={el => headerRefs.current[i] = el}
                                style={{
                                    borderBottom: '1px solid #ccc',
                                    padding: "15px 15px 40px 15px",
                                    position: "relative",
                                    zIndex: 1
                                }}
                            >
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
                            <div id="ProductGridContent" style={{
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                minHeight: 0,
                                height: "100%" // Take full height of the grid cell
                            }}>
                                {renderCustomContent(product)}
                            </div>
                        </div>
                    </div>

                ))}
            </div>

            <div id="ProductGrid-2" ref={gridRef} style={{
                display: Object.values(stickyHeaders).some(val => val === true) ? "flex" : "none",
                position: "fixed", top: "0", zIndex: "1000",
                gap: "0",
                background: "#fff",
                width: "100%",
                height: "fit-content",
            }}>
                {groupedProducts.map((product, i) => (
                    <div key={i} style={{
                        width: "405px",
                        height: "300px",
                    }}>
                        {stickyHeaders[i] && (
                            <div>
                                <div
                                    style={{
                                        position: "fixed", top: "0", zIndex: "1000",
                                        width: cardRefs.current[i]?.offsetWidth,
                                        animation: "fadeIn 0.3s ease-out",
                                        height: "160px"
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                        <div style={{ flex: 1, textAlign: "left" }}>
                                            <h4 style={{
                                                fontSize: "18px",
                                                margin: "0 0 5px 0",
                                                fontWeight: "600"
                                            }}>
                                                {product.name} {product.macType}{" "}
                                                {product.beautyScreenSize?.length > 0 && `${product.beautyScreenSize.join('" và ')}"`}
                                            </h4>
                                            <p style={{
                                                fontSize: "14px",
                                                margin: "0",
                                                color: "#666",
                                                fontWeight: "500"
                                            }}>
                                                Chip {product.chip}
                                            </p>
                                            {product.price && (
                                                <p style={{
                                                    fontSize: "14px",
                                                    margin: "5px 0 0 0",
                                                    color: "#555",
                                                    fontWeight: "600"
                                                }}>
                                                    Từ {product.price.toLocaleString()}₫
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                ))}
            </div>
        </>
    );
};

export default ProductGrid;