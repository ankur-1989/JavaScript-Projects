<template>
 <div>
    <b-nav tabs>
            <b-nav-item disabled> <b>JS Quiz</b>  </b-nav-item>
            <b-nav-item disabled>Counter: {{numberOfCorrectAnswers}}/{{totalQuestions}}</b-nav-item>
        
     </b-nav>
 </div>
</template>

<script>
export default {
    props: [
        'totalQuestions',
        'numberOfCorrectAnswers'
    ]
}
</script>
