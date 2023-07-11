export default function Navigation(){
    
    const scrollTo = (ID : string) => {

        var elementToScrollTo = document.getElementById(`section-${ID}`);
        if(elementToScrollTo) {
            elementToScrollTo.scrollIntoView({behavior: "smooth"});
        }
    }

    return(
        <nav className="absolute top-0 flex justify-between w-full px-24 py-8">
          <h1 className="text-6xl">
            <strong>DS</strong>
          </h1>
          <ul className="flex flex-row gap-16 py-5 text-xl">
            <li>
                <button onClick={() => scrollTo("about")}>About</button>
            </li>
            <li>
              <a href="www.youtube.com">Projects</a>
            </li>
            <li>
              <a href="www.youtube.com">Blog</a>
            </li>
            <li>
              <button onClick={() => scrollTo("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
    )
}