import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import STUDENT_OBJECT from '@salesforce/schema/Student__c';
import NAME_FIELD from '@salesforce/schema/Student__c.Name';
import REGISTRATION_FIELD from '@salesforce/schema/Student__c.Registration__c';
import COURSE_FIELD from '@salesforce/schema/Student__c.Course__c';
import REGISTRATION_STATUS_FIELD from '@salesforce/schema/Student__c.Registration_Status__c';

export default class StudentCreator extends LightningElement {
    objectApiName = STUDENT_OBJECT;
    nameField = NAME_FIELD;
    registrationField = REGISTRATION_FIELD;
    courseField = COURSE_FIELD;
    registrationStatusField = REGISTRATION_STATUS_FIELD;

    handleSaveStudent(event) {
        this.dispatchEvent(new ShowToastEvent({
            title: "Student created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        }));

    }
}
