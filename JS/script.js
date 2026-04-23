function openApt(deptName) {
    document.getElementById('modalTitle').innerText = "Book Appointment - " + deptName;
    var aptModal = new bootstrap.Modal(document.getElementById('aptModal'));
    aptModal.show();
}

function openHistory(name, experience, qualification, awards) {
    const historyHTML = `
        <div class="p-3">
            <h3 style="color: #b33939;">${name}</h3>
            <hr>
            <p><strong>Qualification:</strong> ${qualification}</p>
            <p><strong>Experience:</strong> ${experience}</p>
            <p><strong>Achievements:</strong> ${awards}</p>
            <p class="mt-4"><strong>Summary:</strong></p>
            <p>Dr. ${name} is a leading expert with a successful record of treating 10,000+ patients. They have been a pillar of Cambridge Hospital, specializing in advanced medical care and research.</p>
        </div>
    `;
    document.getElementById('historyContent').innerHTML = historyHTML;
    var histModal = new bootstrap.Modal(document.getElementById('historyModal'));
    histModal.show();
}