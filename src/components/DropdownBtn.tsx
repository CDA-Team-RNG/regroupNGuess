import React, { useState } from 'react'
import downArrow from '../assets/downward-arrow.png'

export const DropdownBtn = (props: any) => {

    const [display, setDisplay] = useState(false);

    /**
     * Switch the value of the state display between true and false
     */
    const switchDisplay = () => {
        if(display === true) {
            setDisplay(false)
        }
        else {
            setDisplay(true)
        }
    }

    /**
     * Call the changeCategory method in props, then call switchDisplay
     * @param object 
     */
    const changeSelectedCategory = (object: any) => {
        props.changeCategory(object);
        switchDisplay();
    } 

    return (
        <>
            <div className='dropdown'>
                <button onClick={switchDisplay} className='dropdown__btn'>
                    <div className='dropdown__btn__item'>
                        <div>
                            <img className='gameLogo' src={props.selectedCategory.img}/>
                            <h3>{props.selectedCategory.title}</h3>
                        </div>   
                        <img className='arrowIcon' src={downArrow} />
                    </div>
                </button>
                <ul className={`dropdown__items ${display ? "" : "hidden"}`} >
                    {props.data.map((item: any) => (
                        <li key={item.title} className='category'>
                            <div onClick={() => changeSelectedCategory(item)}>
                                <img className='gameLogo' src={item.img}/>
                                <h3>{item.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
  )
}