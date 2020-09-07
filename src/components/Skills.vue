<template>
<div class="skills">
    {{name}}
    <div class="holder">

        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter a skill you have.." v-model="skill">

            <p v-if="skill.length>=1"> You Typed: {{ skill }}</p>
        </form>

        <ul>
            <li v-for="(data,index) in skills" :key='index'>{{index +1}}. {{data.skill}} </li>
        </ul>
    </div>
    <p v-if="skills.length>=5">You are Eligible to apply. Required 5 Skills </p>
    <p v-else>You have less than 5 skills. You didnt Fall into Our Criteria yet</p>

    <!-- <div v-bind:class="alertObject"></div>
    <div v-bind:style="alertStyle"></div> -->

</div>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            name: 'Courseto',
            skill: '',
            skills: [{
                    "skill": "Vue Developer"
                },
                {
                    "skill": "Frontend Developer"
                }
            ],
            alertObject: {
                alert: true

            },
            alertStyle: {
                bgColor: 'black',
                bgWidth: '100%',
                bgHeight: '30px'
            },

        }
    },
    methods: {
        addSkill() {
            this.skills.push({
                skill: this.skill
            });
            this.skill = '';
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

a {
    color: #42b983;
}

.alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
}

.holder {
    background: #fff;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
}

p {
    text-align: center;
    padding: 30px 0;
    color: gray;
}

.container {
    box-shadow: 0px 0px 40px lightgray;
}

input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
}
</style>
