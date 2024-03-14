(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    const userId = document.querySelector("meta[name='userId']").getAttribute("content");
    // set attributes
    dialog.setAttribute("header-text", "New Hire Survey");
    footer.setAttribute("slot", "footer");
    // content
    content.innerHTML = `<p>Your experience matters to us, and we'd love to hear your thoughts on our onboarding process. Please take a moment to complete our brief survey. Your participation and feedback will help us improve our processes.</p><p><a href="https://beldenex.sjc1.qualtrics.com/jfe/form/SV_6ssif3JaAAGH61U?Q_TS_ID=TS_9w8dwnwQEzU2rwA&Q_TS_RS=Self&Q_EE_ANON=1&_=1&userId=${userId}" target="_blank">Take the survey</a></p>`;
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => dialog.close();
    footerBtn.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
