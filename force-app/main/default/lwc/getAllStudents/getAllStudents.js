import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Student__c.Name';
import REGISTRATION_FIELD from '@salesforce/schema/Student__c.Registration__c';
import REGISTRATION_STATUS_FIELD from '@salesforce/schema/Student__c.Registration_Status__c';
import getStudents from '@salesforce/apex/StudentController.getStudents';
import { NavigationMixin } from 'lightning/navigation';

const COLUMNS = [
    { label: 'Student Name', fieldName: NAME_FIELD.fieldApiName, type: 'text', required: true },
    { label: 'Registration', fieldName: REGISTRATION_FIELD.fieldApiName, type: 'text' },
    { label: 'Registration Status', fieldName: REGISTRATION_STATUS_FIELD.fieldApiName, type: 'text' }
];

export default class AccountCreator extends NavigationMixin(LightningElement) {
    columns = COLUMNS;
    filter = '';
    students = [];

    @wire(getStudents, { filter: '$filter'})
    wiredStudents({ data, error }) {
        if (data) {
            this.students = data; 
        } else if (error) {
            console.error(error);
        }
    }

    filterActive() {
        this.filter = 'ativa';
    }

    filterInactive() {
        this.filter = 'inativa';
    }

    showAll() {
        this.filter = '';
    }

    navigateToApp() {
    this[NavigationMixin.Navigate]({
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Student__c',
        actionName: 'new'
        }
    });
}
}

