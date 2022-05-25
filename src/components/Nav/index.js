import React from 'react';

function Nav() {

const categories = [
    {
        name: "wedding",
        description:
        "Photos of customer order wedding cakes",
    },
    { name: "birthday",
      description: 
      "Photos of customer order birthday cakes",
    },
];    

function categorySelected(name) {
    console.log(`${name} clicked`)
}

    return(
        <header>
            <nav className='nav'>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="link" href="/" className="site-title">
                            FEC
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li
                        className='mx-1'
                        key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

}

export default Nav;
