import React, { useState } from 'react'
import downArrow from '../assets/downward-arrow.png'

export const CategoryDropDown = (props: any) => {

    const [display, setDisplay] = useState(false);

    /**
     * Switch the value of the state display between true and false
     */
    const displayBtn = () => {
        setDisplay(!display)
    }

    const hiddenBtn = () => {
        console.log('help')
        setDisplay(false)
    }

    /**
     * Call the changeCategory method in props, then call switchDisplay
     * @param object 
     */
    const changeSelectedCategory = (object: any) => {
        props.changeCategory(object);
    }

    return (
        <>
            <div className='dropdown' onClick={displayBtn}>
                <button className='dropdown__btn'>
                    <div className='dropdown__btn__item'>
                        <div>
                            <figure>
                                <img className='gameLogo' src={props.selectedCategory.img}/>
                            </figure>
                            <h3>{props.selectedCategory.title}</h3>
                        </div>   
                        <img className='arrowIcon' src={downArrow} />
                    </div>
                </button>
                <ul  onBlur={hiddenBtn} className={`dropdown__items ${display ? "" : "hidden"}`} >
                    {props.data.map((item: any) => (
                        <li key={item.title} className='category'>
                            <div onClick={() => changeSelectedCategory(item)}>
                                <figure>
                                    <img className='gameLogo' src={item.img}/>
                                </figure>
                                <h3>{item.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
  )
}