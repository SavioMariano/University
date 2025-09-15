    public with sharing class StudentController {
    @AuraEnabled(cacheable=true)
    public static List<Student__c> getStudents(String filter) {
        if (filter == 'ativa' || filter == 'inativa') {
            return [
            SELECT Name, Registration__c, Registration_Status__c
            FROM Student__c
            WHERE Registration_Status__c = :filter
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        }else {
            return [
            SELECT Name, Registration__c, Registration_Status__c
            FROM Student__c
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
        }
    }
}