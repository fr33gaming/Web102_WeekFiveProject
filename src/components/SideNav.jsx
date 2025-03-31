import React from "react";


const SideNav = ({cats}) => {

    return (
        <div className="side-nav">
            <h2>Who Have We Seen So Far?</h2>
            <div className="image-container">
                {cats && cats.length > 0 ? (

                    cats.map((cat, index) => (
                        <div key={index} className="cat-info">
                            <img src={cat.image} alt="Cat" />
                            <p>A {cat.breed} from {cat.origin}</p>
                        </div>
                  )
                )
                ) : (
                    <div>
                        <h3>No Cats Yet!</h3>
                    </div>
                )}
            </div>
        </div>
    )

}

export default SideNav;