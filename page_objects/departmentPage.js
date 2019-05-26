const departmentPageCommands = {
    clickDepartment() {
        this.click('@department');
        return this;
    }
}

module.exports = {
    commands: [departmentPageCommands],
    elements: {
        department: {
            selector: 'button[class="department-btn"]'
        }
    }
};