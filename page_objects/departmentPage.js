const departmentPageCommands = {
    clickDepartment() {
        this.click('@department');
        return this;
    }
}

module.exports = {
    url: "https://www.walmart.ca/en/home/N-105",
    commands: [departmentPageCommands],
    elements: {
        department: {
            selector: 'button[class="department-btn"]'
        }
    }
};