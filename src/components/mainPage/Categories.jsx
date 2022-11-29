import React from "react"

const Categories = () => {
    const data = [
        {
        cateImg:"./images/categories/cat1.png",
        cateName:"Fashion",
        },
        {
        cateImg:"./images/categories/cat2.jpg",
        cateName:"Electronis",
        },
        {
        cateImg:"./images/categories/cat3.png",
        cateName:"Cars",
        },
        {
        cateImg:"./images/categories/cat4.jpg",
        cateName:"Home & Garden",
        },
        {
        cateImg:"./images/categories/cat5.jpg",
        cateName:"Gifts",
        },
        {
        cateImg:"./images/categories/cat6.jpg",
        cateName:"Music"
        },
        {
        cateImg:"./images/categories/cat7.png",
        cateName:"Health & Beauty",
        },
        {
        cateImg:"./images/categories/cat8.png",
        cateName:"Pets",
        },
        {
        cateImg:"./images/categories/cat9.png",
        cateName:"Baby Toys",
        },
        {
        cateImg:"./images/categories/cat10.jpg",
        cateName:"Groceries",
        },
        {
        cateImg:"./images/categories/cat11.jpg",
        cateName:"Books",
        },
    ]
    return (
        <>
            <div className="category">
                {data.map((value, index) => {
                        return(
                            <div className="box f_flex" key={index}>
                                <img src = {value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Categories