const chat = document.getElementById("chat");
const input = document.getElementById("q");
const file = document.getElementById("file");

file.addEventListener("change", function (e) {

    if (!e.target.files.length) return;

    const name = e.target.files[0].name;

    chat.innerHTML += `
    <div class="user">
        📁 <b>Uploaded Log</b><br><br>
        ${name}
    </div>
    `;

    chat.scrollTop = chat.scrollHeight;

});

function analyze() {

    if (input.value.trim() !== "") {

        chat.innerHTML += `
        <div class="user">
            ${input.value}
        </div>
        `;

    }

    chat.innerHTML += `
    <div class="ai loading" id="loadingBox">

        🤖 <b>SentinelAI</b><br><br>

        Analyzing Windows Event Log...<br><br>

        ⏳ 10%

    </div>
    `;

    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {

        document.getElementById("loadingBox").innerHTML = `
        🤖 <b>SentinelAI</b><br><br>

        Parsing Event Logs...<br><br>

        ⏳ 35%
        `;

    }, 700);

    setTimeout(() => {

        document.getElementById("loadingBox").innerHTML = `
        🤖 <b>SentinelAI</b><br><br>

        Running MITRE ATT&CK Detection...<br><br>

        ⏳ 70%
        `;

    }, 1500);

    setTimeout(() => {

        const loadingBox = document.getElementById("loadingBox");

        loadingBox.classList.remove("loading");

        loadingBox.innerHTML = `

<div class="analysis-card">

<h3>🤖 SentinelAI Analysis</h3>

<p><strong>🚨 Threat Level:</strong> Medium</p>

<p><strong>⚠ Threat:</strong> Suspicious PowerShell Execution</p>

<p><strong>🎯 MITRE ATT&CK:</strong> T1059</p>

<p><strong>💻 Affected Host:</strong> WIN-CLIENT-07</p>

<p><strong>📄 IOC:</strong> powershell.exe -enc</p>

<p><strong>🛡 Recommendation:</strong></p>

<ul>
<li>Isolate endpoint immediately</li>
<li>Investigate parent process</li>
<li>Reset credentials if compromise is confirmed</li>
</ul>

</div>

        `;

        chat.scrollTop = chat.scrollHeight;

    }, 3000);

    input.value = "";

}