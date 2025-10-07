import React, { useState, useEffect, useContext } from 'react';
import leftArrw from '../../assets/leftArrow.svg';
import rightArrw from '../../assets/rightArrow.svg';
import ProductCategoriesContext from './ProductCategoriesContext.js';
import './styles/ProductIntro.css';

const CARD_WIDTH = 405;
const CARD_MARGIN = 20;

const ProductKnowledge = (props) => {
    const productCategories = useContext(ProductCategoriesContext);

    console.log("Props: ", props);
    const cards = Object.values(props.kienThucTongHop || {}).map(card => ({
        title: card?.title || '',
        subTitle: card?.subTitle || '',
        imgSrc: card?.imgSrc || '',
    }));

    const detailsCard = Object.values(props.kienThucTongHop || {}).map(card => ({
        title: card?.title || '',
        subTitle: card?.subTitle || '',
        allSection: card?.allSection || [],
    }));

    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);
    // Add state to track selected card index
    const [selectedCardIdx, setSelectedCardIdx] = useState(null);
    const [cardsPerView, setCardsPerView] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        // Responsive: calculate how many cards fit in the visible area
        const handleResize = () => {
            const width = window.innerWidth;
            // You can adjust breakpoints and card count as needed
            if (width >= 1200) setCardsPerView(2);
            else if (width >= 800) setCardsPerView(1);
            else setCardsPerView(1);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure current index is always valid
    useEffect(() => {
        if (current > cards.length - cardsPerView) {
            setCurrent(Math.max(cards.length - cardsPerView, 0));
        }
    }, [cards.length, cardsPerView, current]);

    const nextSlide = () => {
        if (current < cards.length - cardsPerView) setCurrent(current + 1);
    };

    const prevSlide = () => {
        if (current > 0) setCurrent(current - 1);
    };

    const handleCardClick = (idx) => {
        setSelectedCardIdx(idx);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            setModalVisible(true);
        } else if (modalVisible) {
            // Wait for fade-out before hiding
            const timeout = setTimeout(() => setModalVisible(false), 250);
            return () => clearTimeout(timeout);
        }
    }, [showModal]);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showModal]);

    return (
        <div id="ProductKnowledge" style={{ width: '100%', maxWidth: '1680px', overflow: 'hidden', position: 'relative', padding: '40px 0' }}>
            <h2 className='font-semibold'>Tìm hiểu {productCategories}.</h2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', position: 'relative', flexDirection: 'column', gap: '24px' }}>
                <ul
                    style={{
                        display: 'flex',
                        transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)',
                        transform: `translateX(-${current * (CARD_WIDTH + CARD_MARGIN)}px)`, // No extra offset
                        width: `${cards.length * (CARD_WIDTH + CARD_MARGIN)}px`,
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                        height: '740px',
                    }}
                >
                    {cards.map((card, idx) => (
                        <li
                            key={idx}
                            style={{
                                minWidth: `${CARD_WIDTH}px`,
                                height: '740px',
                                marginRight: `${CARD_MARGIN}px`,
                                background: '#fff',
                                borderRadius: '24px',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 0,
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCardClick(idx)} // Pass index
                        >
                            <img
                                src={card.imgSrc}
                                alt={card.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 1,
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    zIndex: 2,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start',
                                    padding: '24px',
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)',
                                    color: '#fff',
                                }}
                            >
                                <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '8px' }}>{card.title}</h3>
                                <p style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '548px', maxWidth: '100%', lineHeight: '1.2' }}>
                                    {card.subTitle.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < card.subTitle.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                                {/* Plus button */}
                                <button
                                    onClick={e => { e.stopPropagation(); handleCardClick(idx); }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: 'rgba(44,44,44,0.85)',
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                        cursor: 'pointer',
                                        zIndex: 3,
                                    }}
                                >
                                    <span style={{
                                        color: '#fff',
                                        fontSize: '2rem',
                                        fontWeight: 'light',
                                        lineHeight: '1',
                                        userSelect: 'none',
                                    }}>+</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-4 self-end'>
                    <button
                        onClick={prevSlide}
                        disabled={current === 0}
                        style={{
                            transform: 'translateY(0)',
                            zIndex: 2,
                            background: 'oklch(55.1% 0.027 264.364)',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: current === 0 ? 'not-allowed' : 'pointer',
                            opacity: current === 0 ? 0.5 : 1,
                        }}
                        className='text-white p-1 rounded-full flex items-center justify-center w-[36px] h-[36px]'
                    >
                        <div className='flex justify-center items-center size-full'><img src={leftArrw} className='invert-[1]' /></div>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={current >= cards.length - cardsPerView}
                        style={{
                            transform: 'translateY(0)',
                            zIndex: 2,
                            background: 'oklch(55.1% 0.027 264.364)',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: current >= cards.length - cardsPerView ? 'not-allowed' : 'pointer',
                            opacity: current >= cards.length - cardsPerView ? 0.5 : 1,
                        }}
                        className='text-white p-1 rounded-full flex items-center justify-center w-[36px] h-[36px]'
                    >
                        <div className='flex justify-center items-center size-full'><img src={rightArrw} className='invert-[1]' /></div>
                    </button>
                </div>


            </div>
            <div style={{ display: 'none', textAlign: 'center', marginTop: '24px' }}>
                {cards.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: idx === current ? '#333' : '#ccc',
                            margin: '0 6px',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
            {(showModal || modalVisible) && selectedCardIdx !== null && (
                <div
                    className={`modal-overlay ${showModal ? 'fade-in' : 'fade-out'}`}
                    onClick={handleCloseModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.45)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        transition: 'opacity 0.25s ease',
                    }}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '32px',
                            padding: '26px',
                            maxWidth: '1260px',
                            width: '100%',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                            position: 'relative',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'stretch',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                        }}
                        className="custom-modal-content"
                        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        <button
                            onClick={handleCloseModal}
                            style={{
                                position: 'sticky', // Change from 'absolute' to 'sticky'
                                top: '0px',
                                right: '0',
                                alignSelf: 'flex-end', // Ensure it stays at the right
                                background: '#222',
                                color: '#fff',
                                border: 'none',
                                fontSize: '1.5rem',
                                borderRadius: '50%',
                                width: '36px',
                                height: '36px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10, // Make sure it stays above content
                                marginBottom: '16px', // Optional: space below button
                            }}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ padding: '0 0 16px 0' }}>
                                <div style={{ color: '#222', fontWeight: 500, fontSize: '1.1rem', marginBottom: '8px' }}>
                                    {detailsCard[selectedCardIdx]?.subTitle}
                                </div>
                                <h2 style={{ fontWeight: 700, fontSize: '2.5rem', margin: 0, marginBottom: '32px', lineHeight: 1.1 }}>
                                    {detailsCard[selectedCardIdx]?.title}
                                </h2>
                            </div>
                            {/* Sections */}
                            {detailsCard[selectedCardIdx]?.allSection && Object.values(detailsCard[selectedCardIdx].allSection).length > 0 ? (
                                <div style={{ marginTop: 0 }}>
                                    {Object.values(detailsCard[selectedCardIdx].allSection).map((section, idx) => (
                                        <div
                                            key={idx}
                                            style={{
                                                background: '#f6f6f8',
                                                borderRadius: '24px',
                                                marginBottom: '32px',
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            {section.title && (
                                                <h3 style={{ fontWeight: 600, fontSize: '1.25rem', marginBottom: '16px', marginTop: 0 }}>
                                                    {section.title}
                                                </h3>
                                            )}
                                            {section.content && (
                                                <p style={{ fontSize: '2.0rem', lineHeight: 1.0, margin: 0, padding: '64px 56px 32px', fontWeight: '600', color: "rgb(110,110,115)" }}>{section.content}</p>
                                            )}
                                            {section.imgSrc && (
                                                <img
                                                    src={section.imgSrc}
                                                    alt=""
                                                    style={{
                                                        width: '100%',
                                                        background: '#eee',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                            )}

                                            {section.ref && (
                                                <p style={{ color: "rgb(110,110,115)", fontSize: "12px", padding: '64px 56px 32px' }}>{section.ref}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ marginTop: '32px', color: '#888' }}>
                                    Không có thông tin chi tiết.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );


};

export default ProductKnowledge;