import React from 'react';

const ProductGrid = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>Không có sản phẩm nào.</div>;
    }

    // ✅ Gom nhóm sản phẩm theo name + macType
    const groupedProducts = Object.values(
        products.reduce((acc, product) => {
            const key = `${product.name}-${product.macType}`;
            if (!acc[key]) {
                acc[key] = { ...product, screenSizes: [] };
            }
            if (product.screenSize && !acc[key].screenSizes.includes(product.screenSize)) {
                acc[key].screenSizes.push(product.screenSize);
            }
            return acc;
        }, {})
    );

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {groupedProducts.map(({ name, macType, price, generalInfo, imgSrc, chip, screenSizes }, i) => (
                <div
                    key={i}
                    style={{
                        width: "405px",
                        background: "#ffffff00",
                        padding: "15px",
                        textAlign: "center",
                        lineHeight: "1.5",
                    }}
                >
                    {/* Hình ảnh sản phẩm */}
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            alt={`${name} ${macType}`}
                            style={{
                                width: "100%",
                                borderRadius: "10px",
                                marginBottom: "10px",
                            }}
                        />
                    )}

                    {/* Tên sản phẩm */}
                    <h3 style={{ fontSize: "28px" }}>
                        {name} {macType}{" "}
                        {screenSizes?.length > 0 && `${screenSizes.join('" và ')}"`}
                    </h3>

                    <p style={{ fontWeight: 'bold' }}>Chip {chip}</p>

                    {/* Thông tin chung */}
                    {generalInfo && (
                        <p style={{ fontSize: "17px", color: "#272727ff", padding: "0 28px", margin: '16px' }}>
                            {generalInfo}
                        </p>
                    )}

                    {/* Giá */}
                    {/* Giá và trả góp */}
                    {price && (
                        <>
                            <p style={{ color: "#555", fontWeight: "bold", fontSize: "17px", color: "#272727ff", padding: "0 28px", margin: '16px' }}>
                                Từ {price.toLocaleString()}₫ hoặc {(price / 24).toLocaleString()}₫/th. trong 24 tháng*
                            </p>
                        </>
                    )}

                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
