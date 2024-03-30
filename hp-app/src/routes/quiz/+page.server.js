export const actions = {
    submission: async({request}) => {
        const data = await request.formData();
        console.log(data);
    } 
}