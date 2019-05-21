import postAboutCompany from '../controllers/footer/postAboutCompany/postAboutCompanyData'
import postAboutCompanyTerms from '../controllers/footer/postAboutCompany/postTermsAndCondition'
import postAboutCompanyGuaantee from '../controllers/footer/postAboutCompany/postGuarantee'
import getAboutCompany from '../controllers/footer/getAboutCompany/getAboutCompanyData'
import getAboutCompanyTerms from '../controllers/footer/getAboutCompany/getTermsAndCondition'
import getAboutCompanyGuarantee from '../controllers/footer/getAboutCompany/getGuarantee'
import upload from '../configFiles/fileUpload'

export class FooterRoutes{
    public routes(app:any):void{

        app.route('/postData')
        .post(postAboutCompany)

        app.route('/postTermsAndConditions')
        .post(upload.single('fileName'),postAboutCompanyTerms)

        app.route('/postGuarantee')
        .post(upload.single('fileName'),postAboutCompanyGuaantee)

        app.route('/getData')
        .get(getAboutCompany)

        app.route('/getTermsAndConditions')
        .get(getAboutCompanyTerms)

        app.route('/getGuarantee')
        .get(getAboutCompanyGuarantee)
    }
}