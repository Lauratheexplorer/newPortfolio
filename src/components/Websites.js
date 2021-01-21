import kimsite from "../images/kimsite.jpg"
import quotegen from "../images/quotegen.jpg"
import robots from "../images/robots.jpeg"


export const websites = [
    {
      id: 1,
      src: kimsite,
      name: 'Voiceover portfolio',
      description: 'Basic portfolio website, showcasing voice over clips.',
      seeLive: <a className="white ttu tracked" href="https://github.com/Lauratheexplorer/kimSite"><p>See Live</p></a>,
      sourceCode: <a className="white ttu tracked" href="https://lauratheexplorer.github.io/kimSite/"><p>Source Code</p></a>,           
    },
    {
      id: 3,
      src: quotegen,
      name: 'Quote generator',
      description: 'Website which generates random quotes, which are pulled from an API.',
      sourceCode: <a className="white ttu tracked" href="https://github.com/Lauratheexplorer/quote-generator"><p>See Live</p></a>,
      seeLive: <a className="white ttu tracked" href="https://lauratheexplorer.github.io/quote-generator/"><p>Source Code</p></a>,
    },
    {
      id: 2,
      src: robots,
      name: 'Robot filtering',
      description: 'Website that filters robots based on a searchbox. Built with React.',
      sourceCode: <a className="white ttu tracked" href="https://github.com/Lauratheexplorer/robofriend"><p>See Live</p></a>,
      seeLive: <a className="white ttu tracked" href="https://robotselector.netlify.app/"><p>Source Code</p></a>,   
    },
];

