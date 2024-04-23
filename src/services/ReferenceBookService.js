export const ReferenceBookService = {
    
    async loadNationalityList() {
        return await fetch('https://api.evrotrans.net/APIet/?command=nationality')
    },
};
