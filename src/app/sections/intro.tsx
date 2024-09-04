import Image from 'next/image'
import Link from 'next/link'

import { useState, useEffect } from 'react';


export default function IntroSection() {
    const [titleText, setTitleText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numCursorBlinks, setNumCursorBlinks] = useState(0);
    const [displayCursor, setDisplayCursor] = useState(true);

    const title = 'Hi, I\'m Josh!';

    useEffect(() => {
        if (currentIndex < title.length) {
            const timeout = setTimeout(() => {
                if (title.charAt(currentIndex) == '#') {
                    setTitleText((lastText) => lastText.substring(0, lastText.length - 1))
                } else {
                    setTitleText((lastText) => lastText.substring(0, lastText.length) + title.charAt(currentIndex));
                }

                setCurrentIndex((lastIndex) => lastIndex + 1);
            }, 100)

            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => {
                if (numCursorBlinks >= 9) {
                    return;
                }

                setDisplayCursor((isDisplayed) => !isDisplayed);
                setNumCursorBlinks((lastNumBlinks) => lastNumBlinks + 1);
            }, 500)

            return () => clearTimeout(timeout)
        }
    }, [currentIndex, numCursorBlinks])

    return (
        <div className="flex justify-center flex-col min-h-screen items-center bg-blue-300">
            <div className="">
                <div className="">
                    <h1 className="text-3xl text-white animate-fade-in">
                        <span className="text-center">{titleText}</span>
                        <span className={displayCursor ? '' : 'hidden'}>|</span>    
                    </h1>
                    <br />
                    <h1 className="text-2xl text-white animate-fade-in">I'm an aspiring software engineer.</h1>
                    <br />
                    <Link href="#about" scroll={true}>
                        <button className="p-3 border-2 border-white rounded animate-fade-in">
                            <div className="flex">
                                <span className="font-bold text-white mr-3">Check out my stuff</span>
                                <Image src="/img/scroll_arrow.svg" width={15} height={15} alt="Scroll down"></Image>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}