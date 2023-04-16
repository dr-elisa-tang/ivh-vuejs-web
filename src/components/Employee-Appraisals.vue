<template>
    <div class = "container">
            
            <h1 class = "text-center">Appraisals</h1>

            <table class = "table table-striped">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Status</th>
                    </tr>

                </thead>
                <tbody>
                    <tr v-for="employeeAppraisal in employeeAppraisals" v-bind:key="employeeAppraisal.AppraisalId">
                        <td> {{employeeAppraisal.Year }}</td>
                        <td> {{employeeAppraisal.Status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>

import EmployeeAppraisalsService from '../services/EmployeeAppraisalsService.js';

export default {
    name: 'Employee-Appraisals',
    data(){
        return {
            employeeAppraisals: []
        }
    },
    methods: {
        getAppraisalViewByEmployeeId(){
            EmployeeAppraisalsService.getAppraisalViewByEmployeeId().then((response) => {
                this.employeeAppraisal = response.data;   
            });
        }
    },
    created() {
        this.getAppraisalViewByEmployeeId();
    }
}

</script>