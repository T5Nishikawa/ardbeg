import React from "react";

export default function Home() {
    const clickUrl = () => {
        const url = "/pages/index"
        ReadableStreamDefaultController.push(url)
    }

    return (
        <>
            <div onClick={clickUrl}>リンク</div>
        </>
    );
};