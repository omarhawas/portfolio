export default function YTExtension() {
    return (
      <article className="prose prose-invert max-w-none">
        <h1>YouTube Comments Extension (Planned)</h1>
        <p>
          A Chrome extension to preview top comments by hovering a YouTube
          thumbnail — a quick way to judge whether a video is worth watching
          without opening it.
        </p>
  
        <h2>Motivation</h2>
        <p>Reduce time wasted clicking into videos just to read the comments.</p>
  
        <h2>Approach (Planned)</h2>
        <ul>
          <li>Hover overlay UI injected into YouTube grid pages</li>
          <li>Fetch & display top comments with basic filters</li>
          <li>Keyboard shortcuts to pin/expand the overlay</li>
        </ul>
  
        <h2>Tech (Planned)</h2>
        <p>Chrome Extension APIs, JavaScript (light React UI if needed).</p>
  
        <h2>Status</h2>
        <p>Idea stage — included to showcase product thinking and pipeline.</p>
      </article>
    );
  }
  