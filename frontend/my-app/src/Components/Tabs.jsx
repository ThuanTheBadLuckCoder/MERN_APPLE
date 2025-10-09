import React from 'react';

const Tabs = ({ 
    tabs, 
    activeTab, 
    onTabChange,
    tabListStyle = {}, 
    tabItemStyle = {}, 
    activeTabItemStyle = {}
}) => {
    if (!tabs || tabs.length === 0) return null;

    const defaultListStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        listStyle: "none",
        padding: "6px",
        width: "100%",
        maxWidth: "fit-content",
    };

    const defaultItemStyle = {
        cursor: "pointer",
        padding: "10px 15px",
        color: "#333",
        background: "transparent",
        borderRadius: "9999px",
        transition: "0.2s ease",
    };

    const defaultActiveStyle = {
        color: "white",
        background: "black",
    };

    return (
        <ul style={{ ...defaultListStyle, ...tabListStyle }}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                    <li
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        style={{
                            ...defaultItemStyle,
                            ...(isActive ? defaultActiveStyle : {}),
                            ...(isActive ? activeTabItemStyle : {}),
                            ...tabItemStyle, // style truyền vào vẫn được ưu tiên
                        }}
                    >
                        {tab}
                    </li>
                );
            })}
        </ul>
    );
};

export default Tabs;
