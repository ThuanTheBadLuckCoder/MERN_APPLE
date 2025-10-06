import React, { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CARD_WIDTH = 405;
const CARD_MARGIN = 20;

const ProductKnowledge = (props) => {
    const cards = Object.values(props.kienThucTongHop || {}).map(card => ({
        title: card?.title || '',
        subTitle: card?.subTitle || '',
        imgSrc: card?.imgSrc || '',
    }));

    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [cardsPerView, setCardsPerView] = useState(1);

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

    const handleCardClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div id="ProductKnowledge" style={{ width: '100%', maxWidth: '1680px', overflow: 'visible', position: 'relative', padding: '40px 0' }}>
            <h2 className='font-semibold'>Tìm hiểu {props.productCategories}.</h2>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', position: 'relative', flexDirection: 'column' }}>
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
                            onClick={handleCardClick}
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
                                <p style={{ fontSize: '1rem', marginBottom: '548px', }}>{card.subTitle}</p>
                                {/* Plus button */}
                                <button
                                    onClick={e => { e.stopPropagation(); setShowModal(true); }}
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

                <div className='flex gap-4'>
                    <button
                        onClick={prevSlide}
                        disabled={current === 0}
                        style={{
                            transform: 'translateY(0)',
                            zIndex: 2,
                            background: '#000000',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: current === 0 ? 'not-allowed' : 'pointer',
                            opacity: current === 0 ? 0.5 : 1,
                        }}
                        className='text-white p-1 rounded-full flex items-center justify-center w-fit h-fit'
                    >
                        <div className='flex justify-center items-center w-[36px] h-[36px]'><ArrowBackIosNewIcon /></div>
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={current >= cards.length - cardsPerView}
                        style={{
                            transform: 'translateY(0)',
                            zIndex: 2,
                            background: '#000000',
                            border: 'none',
                            fontSize: '2rem',
                            cursor: current >= cards.length - cardsPerView ? 'not-allowed' : 'pointer',
                            opacity: current >= cards.length - cardsPerView ? 0.5 : 1,
                        }}
                        className='text-white p-1 rounded-full flex items-center justify-center w-fit h-fit'
                    >
                        <div className='flex justify-center items-center w-[36px] h-[36px]'><ArrowForwardIosIcon /></div>
                    </button>
                </div>


            </div>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
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
            {showModal && (
                <div
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
                    }}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '32px',
                            padding: '48px 64px',
                            maxWidth: '900px',
                            width: '90%',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                            position: 'relative',
                        }}
                    >
                        <button
                            onClick={handleCloseModal}
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                background: 'none',
                                border: 'none',
                                fontSize: '2rem',
                                cursor: 'pointer',
                            }}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        {/* Modal content placeholder */}
                        <h2 style={{ fontWeight: 600, marginBottom: '24px' }}>Modal Title</h2>
                        <p>Edit this content later.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductKnowledge;