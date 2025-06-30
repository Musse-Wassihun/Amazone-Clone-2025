import React from 'react'
import {categoryInfos} from "./CategoryFullinfos.js"
import CategoryCard from './CategoryCard'
import classes from './category.module.css'

function Category() {
  return (
    <section className={classes.category__container}>
      {
      categoryInfos.map((infos) => (     /* not parentheses it's brace*/ 
        <CategoryCard data={infos} />
      ))
      }
    </section>
  );
}

export default Category