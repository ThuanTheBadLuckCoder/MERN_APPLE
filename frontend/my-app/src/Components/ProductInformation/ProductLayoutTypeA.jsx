import React from 'react';
import ProductIntroduction from './ProductIntroduction';
import ProductKnowledge from './ProductKnowledge';
import ProductExplore from './ProductExplore';

const ProductPageLayout = ({ introduction, knowledge, explore }) => {
    // console.log(explore);
  return (
    <div className="flex w-full justify-center flex-col items-center pt-20">
      <ProductIntroduction {...introduction} />
      <ProductKnowledge {...knowledge} />
      <ProductExplore categoriesProducts={explore} />
    </div>
  );
};

export default ProductPageLayout;
