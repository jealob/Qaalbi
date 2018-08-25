import React from "react";
import "./AppForm.css";

const AppForm = props => {
      return (
  
        <div className="landing-page"><div className="form-appointment"><div className="wpcf7" id="wpcf7-f560-p590-o1"><form action="/landing-page-template-do-not-delete/#wpcf7-f560-p590-o1" method="post" className="wpcf7-form" noValidate="novalidate" _lpchecked={1}>
                <div style={{display: 'none'}}>
                  <input type="hidden" name="_wpcf7" defaultValue={560} />
                  <input type="hidden" name="_wpcf7_version" defaultValue="3.5" />
                  <input type="hidden" name="_wpcf7_locale" defaultValue />
                  <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f560-p590-o1" />
                  <input type="hidden" name="_wpnonce" defaultValue="dbb28877d5" />
                </div>
                <div className="group">
                  <div style={{width: '48%', float: 'left'}}>
                    <span className="wpcf7-form-control-wrap text-680"><input type="text" name="text-680" defaultValue size={45} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" placeholder="Name" /></span><br />
                    <span className="wpcf7-form-control-wrap email-680"><input type="email" name="email-680" defaultValue size={45} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" placeholder="Email" /></span><br />
                    <span className="wpcf7-form-control-wrap tel-630"><input type="tel" name="tel-630" defaultValue size={45} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" placeholder="Phone" /></span><br />
                    <span className="wpcf7-form-control-wrap textarea-398"><textarea name="textarea-398" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" placeholder="Special notes, concerns, or requirements" defaultValue={""} /></span></div>
                  <div style={{width: '48%', float: 'right'}}>
                    <h4>What is the best way to reach you?</h4>
                    <p><span className="wpcf7-form-control-wrap radio-98"><span className="wpcf7-form-control wpcf7-radio"><span className="wpcf7-list-item"><label><input type="radio" name="radio-98" defaultValue="Phone" />&nbsp;<span className="wpcf7-list-item-label">Phone</span></label></span><span className="wpcf7-list-item"><label><input type="radio" name="radio-98" defaultValue="Email" />&nbsp;<span className="wpcf7-list-item-label">Email</span></label></span></span></span></p>
                    <h4>Days of the week you are available for appointment:</h4>
                    <p><span className="wpcf7-form-control-wrap checkbox-465"><span className="wpcf7-form-control wpcf7-checkbox"><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-465[]" defaultValue="Monday" />&nbsp;<span className="wpcf7-list-item-label">Monday</span></label></span><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-465[]" defaultValue="Tuesday" />&nbsp;<span className="wpcf7-list-item-label">Tuesday</span></label></span><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-465[]" defaultValue="Wednesday" />&nbsp;<span className="wpcf7-list-item-label">Wednesday</span></label></span><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-465[]" defaultValue="Thursday" />&nbsp;<span className="wpcf7-list-item-label">Thursday</span></label></span><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-465[]" defaultValue="Friday" />&nbsp;<span className="wpcf7-list-item-label">Friday</span></label></span></span></span></p>
                    <h4>Best time of day for your appointment:</h4>
                    <p><span className="wpcf7-form-control-wrap checkbox-246"><span className="wpcf7-form-control wpcf7-checkbox"><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-246[]" defaultValue="Morning" />&nbsp;<span className="wpcf7-list-item-label">Morning</span></label></span><span className="wpcf7-list-item"><label><input type="checkbox" name="checkbox-246[]" defaultValue="Afternoon" />&nbsp;<span className="wpcf7-list-item-label">Afternoon</span></label></span></span></span></p></div>
                </div>
                <div style={{textAlign: 'center', paddingTop: '2em', borderTop: '1px solid rgb(153, 202, 129)', marginTop: '1em'}}><input type="submit" defaultValue="Request My Appointment" className="wpcf7-form-control wpcf7-submit" /><img className="ajax-loader" src="http://www.professionalaudiologicalservices.com/wp-content/plugins/contact-form-7/images/ajax-loader.gif" alt="Sending ..." style={{visibility: 'hidden'}} /></div>
                <div className="wpcf7-response-output wpcf7-display-none" />
                </form>
                </div>
                </div>
                </div>
      
    
      );
    };
    
export default AppForm;