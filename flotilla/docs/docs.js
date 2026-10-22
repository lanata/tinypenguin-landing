// Every docs page, in reading order: [folder, title, one line for the index].
// The side navigation, the index and each page's previous/next links come from here.
const sections = [
  ["Getting started", [
    ["install", "Install and set up", "Download Flotilla and get the tools your agents need."],
    ["first-agent", "Your first agent", "Add a project, give an agent a task and watch it work."],
    ["sidebar", "Reading the sidebar", "What each agent is doing, and who needs you, at a glance."],
  ]],
  ["Everyday work", [
    ["needs-you", "When an agent needs you", "Answer questions, approve plans and permission prompts."],
    ["workspace", "Arranging your workspace", "Panes, tabs and windows, mostly from the keyboard."],
    ["reviewing", "Reviewing the work", "See what an agent changed, read the code and send it notes."],
    ["pull-requests", "Pull requests and wrapping up", "Follow a pull request to merge, then clean up."],
    ["reviewing-prs", "Reviewing pull requests", "Review a teammate's pull request with an agent beside you."],
  ]],
  ["Going further", [
    ["many-agents", "Running many agents", "Checkouts, branches, forks and sleeping agents."],
    ["fewer-interruptions", "Fewer interruptions", "Let agents run the commands you trust without asking."],
    ["routines", "Routines", "Agents that run on a schedule."],
    ["teamwork", "Agents that work together", "Agents that start helpers and message each other."],
    ["repo-settings", "Repo settings", "Set up each new worktree of a repo: commands, files and exclusions."],
  ]],
  ["Reference", [
    ["shortcuts", "Keyboard shortcuts", "The keys worth learning, by what they do."],
    ["pro", "Free and Pro", "What's free, what Pro adds and how the trial works."],
    ["troubleshooting", "Troubleshooting", "Fixes for the problems people run into most."],
  ]],
];

(() => {
  const here = location.pathname.split("/").filter(Boolean).pop();
  const pages = sections.flatMap(([, list]) => list);
  const url = slug => `/flotilla/docs/${slug}/`;

  const nav = document.getElementById("docs-nav");
  if (nav) {
    nav.innerHTML = `<details open><summary>All guides</summary>` + sections.map(([title, list]) =>
      `<h2>${title}</h2><ol>` + list.map(([slug, name]) =>
        `<li><a href="${url(slug)}"${slug === here ? ' aria-current="page"' : ""}>${name}</a></li>`).join("") + `</ol>`
    ).join("") + `</details>`;
    if (matchMedia("(max-width: 900px)").matches) nav.querySelector("details").open = false;
  }

  const pager = document.getElementById("pager");
  const i = pages.findIndex(([slug]) => slug === here);
  if (pager && i >= 0) {
    const link = (page, label, cls) => page
      ? `<a class="${cls}" href="${url(page[0])}"><span>${label}</span>${page[1]}</a>` : "<span></span>";
    pager.innerHTML = link(pages[i - 1], "Previous", "prev") + link(pages[i + 1], "Next", "next");
  }

  const index = document.getElementById("docs-index");
  if (index) {
    index.innerHTML = sections.map(([title, list], n) =>
      `<h2><span class="step">${n + 1}</span>${title}</h2><ul class="pages">` + list.map(([slug, name, blurb]) =>
        `<li><a href="${url(slug)}">${name}</a><p>${blurb}</p></li>`).join("") + `</ul>`
    ).join("");
  }
})();
