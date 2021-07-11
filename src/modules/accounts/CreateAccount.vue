<template>
    <div>
        <div class="center">
            <p class="header">Create New Account</p>
        </div>

        <div class="dark-blob">
            <p>
                <v-text-field 
                    label="Username"
                    dark
                ></v-text-field>
            </p>
            <p>
                <v-text-field 
                    label="Email"
                    dark
                ></v-text-field>
            </p>
            <p>
                <v-text-field 
                    label="Confirm Email"
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
            <p>
                <v-text-field
                    label="Confirm Password" 
                    :append-icon="showPass2 ? 'visibility' : 'visibility_off'"
                    :type="showPass2 ? 'text' : 'password'"
                    dark
                    @click:append="showPass2 = !showPass2"
                ></v-text-field>
            </p>
            <p class="center">
                <v-btn depressed class="log-in">
                    Create Account
                </v-btn>
            </p>
            <p class="center">
                Already have an account? <router-link to="login" class="routerlink"><div class="makeItWhite">Log in</div></router-link>!
            </p>
        </div>	
    </div>
</template>

<script>
export default {
  data() {
    return {
      showPass: false,
      showPass2: false
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
    
    @media screen and (max-width: 620px) {
        .dark-blob {
            width: auto;
            border-radius: 0px;
        }
    }
</style>