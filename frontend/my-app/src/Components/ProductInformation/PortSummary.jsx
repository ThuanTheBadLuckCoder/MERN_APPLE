import React from 'react';

/**
 * PortSummary Component - Displays port information for products
 * Follows ReactJS conventions:
 * - Functional component with proper prop destructuring
 * - PropTypes validation (commented for now as not installed)
 * - Clear prop interface
 * - Consistent styling approach
 */
const PortSummary = ({
    totalPorts,
    connectionPorts,
    showDetails = false,
    className = "",
    style = {}
}) => {
    // Early return if no port data
    if (!totalPorts && (!connectionPorts || Object.keys(connectionPorts).length === 0)) {
        return null;
    }

    // Helper function to format port names for display
    const formatPortName = (portName) => {
        const portNameMap = {
            thunderbolt4: 'Thunderbolt 4 (USB‑C)',
            thunderbolt5: 'Thunderbolt 5 (USB‑C)',
            audioJack: 'jack cắm tai nghe',
            magSafe: 'MagSafe',
            hdmi: 'HDMI',
            usb: 'USB',
            usbC: 'USB‑C',
            ethernet: 'Ethernet',
            sdxc: 'SDXC'
        };
        return portNameMap[portName] || portName;
    };

    // Helper function to create smart port display
    const createSmartPortDisplay = (connectionPorts) => {
        const ports = Object.entries(connectionPorts).filter(([_, count]) => count > 0);

        // Separate Thunderbolt ports from others
        const thunderboltPorts = ports.filter(([portName]) =>
            portName.includes('thunderbolt')
        );
        const otherPorts = ports.filter(([portName]) =>
            !portName.includes('thunderbolt')
        );

        let displayParts = [];

        // Handle Thunderbolt ports
        if (thunderboltPorts.length > 1) {
            // Multiple Thunderbolt types - show as alternatives with "hoặc"
            const thunderboltDisplay = thunderboltPorts
                .map(([portName, count]) => `${count}x ${formatPortName(portName)}`)
                .join(' hoặc ');
            displayParts.push(thunderboltDisplay);
        } else if (thunderboltPorts.length === 1) {
            // Single Thunderbolt type - show normally
            const [portName, count] = thunderboltPorts[0];
            displayParts.push(`${count}x ${formatPortName(portName)}`);
        }

        // Handle other ports
        const otherDisplay = otherPorts
            .map(([portName, count]) => count > 1 ? `${count}x ${formatPortName(portName)}` : formatPortName(portName))
            .join(', ');

        if (otherDisplay) {
            displayParts.push(otherDisplay);
        }

        return displayParts.join(', ');
    };

    // Calculate total if not provided
    const calculatedTotal = totalPorts ||
        (connectionPorts ? Object.values(connectionPorts).reduce((sum, count) => {
            return typeof count === 'number' ? sum + count : sum;
        }, 0) : 0);

    return (
        <div className={`port-summary ${className}`} style={style}>
            <div style={{
                textAlign: 'center',
                padding: '20px', // Reduced padding
                minHeight: showDetails ? '60px' : '30px' // Fixed height for consistency
            }}>
                <p style={{
                    fontSize: '32px',
                    fontWeight: '600',
                    margin: '0 0 5px 0', // Reduced margin
                    color: '#1d1d1f'
                }}>
                    {calculatedTotal} cổng
                </p>

                {showDetails && connectionPorts && (
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '8px',
                        fontSize: '16px',
                        color: '#000'
                    }}>
                        <span style={{
                            padding: '2px 6px',
                            backgroundColor: '#f5f5f7',
                            borderRadius: '4px'
                        }}>
                            {createSmartPortDisplay(connectionPorts)}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortSummary;
