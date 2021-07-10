<template>
    <div>
        <div class="center">
            <p class="header">Log In</p>
        </div>

        <div class="dark-blob">
            <p>
                <v-text-field 
                    label="Username or Email"
                    dark
                ></v-text-field>
            </p>
            <p>
                <v-text-field
                    label="Password" 
                    :append-icon="showPass ? 'visibility' : 'visibility_off'"
                    :type="showPass ? 'text' : 'password'"
                    dark
                    @click:append="showPass = !showPass"
                ></v-text-field>
            </p>
            <p class="center">
                <v-btn depressed class="log-in">
                    Log In
                </v-btn>
            </p>
            <p class="center">
                Forgot your password? Click <router-link to="register" class="routerlink"><div class="makeItWhite">here</div></router-link>!
            </p>
        </div>	
    </div>
</template>

<script>
export default {
  data() {
    return {
      showPass: false
    };
  }
};
</script>

<style scoped>
    .dark-blob {
        width: 500px;
    }
    .forgot-password {
    }
    .makeItWhite {
        text-decoration-color: white;
        color: white;
        display: inline;
    }
    
    @media screen and (max-width: 500px) {
        .dark-blob {
            width: auto;
            border-radius: 0px;
        }
    }
</style>