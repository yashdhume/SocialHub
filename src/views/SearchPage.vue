<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :appBarBtns="appBarBtns"></AppBar>
        <v-container
                v-for="i in testJson"
                :key="i"
        >
        <v-card
                light
                max-width="600"
                class="mx-auto"
        >
            <v-list-item>
                <v-list-item-avatar >
<!--                    <v-img src="https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s320x320/54511895_268031237473443_8504595524563763200_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=07fcHIwe_8MAX_clN9P&oh=4f8736a8f292643053bc91e6f257e370&oe=5EB6FCB3"></v-img>-->
                <v-icon x-large :color="getIcon(i.site)[1]">{{getIcon(i.site)[0]}}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">{{i.site}}</v-list-item-title>

                </v-list-item-content>
            </v-list-item>
            <v-img
                    :src="i.images"
                    contain
            ></v-img>

            <v-card-text>
                {{i.caption}}
            </v-card-text>

        </v-card>
        </v-container>
    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";

    export default {
        name: "SearchPage",
        components: {AppBar},
        methods:{
          getIcon:(str)=> {
              if(str==="Instagram"){
                  return ["fab fa-instagram", "pink"]
              }
              else if (str==="Reddit"){
                  return ["fab fa-reddit", "red"]
              }
          }
        },
        data: ()=>({
            testJson: [{'images': 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/91597235_223555728844339_3392991316410663788_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=QhpoPCTyIR0AX-ZBeuc&oh=0a26119b2f42630bfc2c9195f26fe78b&oe=5E8E0865', 'caption': 'Music Video Out Friday...', 'site': 'Instagram'}, {'images': 'https://discord.gg/djb3XSy', 'caption': 'The r/ksi Discord Server is now officially open.', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/91507277_608331816426509_5453808422572225326_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=IW_mB4GcW74AX9Yxlz_&oh=154c9e5c7e9393166faf1548cbaebb46&oe=5E8DDBD7', 'caption': 'Got a big one for you 😈#poppinchallenge', 'site': 'Instagram'}, {'images': 'https://i.redd.it/zut3s0j009r41.jpg', 'caption': 'Well then.', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/90090177_2636252313152824_3535289293494912110_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=2IiilZhqAaAAX9c0HMb&oh=ecc58869deaabdb0f8ad6abe3da62e76&oe=5EB513C7', 'caption': 'Yeah, yeah, I want that lockdown... 📷: @thatsnathanjames', 'site': 'Instagram'}, {'images': 'https://i.redd.it/370sgce3t7r41.jpg', 'caption': 'Prick', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/90510499_2479576422146304_6168475712853899532_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=6I2RMEZm-dsAX9gq3lb&oh=a21b87570cab138ae07a6e86410cd9d9&oe=5EB71D70', 'caption': 'Popping ft @lilpump and @smokepurpp Link in bio', 'site': 'Instagram'}, {'images': 'https://i.redd.it/q8pur14mk6r41.jpg', 'caption': '#JusticeforHarryandTobi', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/82512595_133946311189874_3697587629552292830_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=jU7hyLaABeAAX_-NyGQ&oh=d9c2ab16e03c08a0f01a28b5737e94be&oe=5EB3ECB8', 'caption': 'Louvre is in the air...', 'site': 'Instagram'}, {'images': 'https://i.redd.it/gr6n4an7p8r41.jpg', 'caption': 'Never noticed that he did the rape face', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/81827633_3294132253951633_2408299643865527647_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ZU_nXksPqsYAX9gFxM2&oh=63ee1dea2ca5e5e8fc853e93f2136a1e&oe=5E8E6C4F', 'caption': 'Glasgow.\n🎥: @troyroscoe_', 'site': 'Instagram'}, {'images': 'https://i.redd.it/mowl8v8er7r41.jpg', 'caption': 'Simon was not ‘On Point’', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/82047650_2634806636649115_4599377582478472225_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=CzLPBwhRXiYAX_EtCxv&oh=74887ffb1c79b4868612822430c67d9d&oe=5E8E1A7D', 'caption': 'Jake Paul is finished. End this prick @anesongib', 'site': 'Instagram'}, {'images': 'https://i.redd.it/obu5iimti6r41.jpg', 'caption': '100% Facts', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/81835227_593813361460860_5518519384544450902_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=oYinkrKpXW4AX8B8DDt&oh=353d9e2ca5cca53cbad660cfee85c6cc&oe=5EB6B205', 'caption': 'Wake Up Call ft @trippieredd out next Friday. Pre order link in my bio 📷: @thatsnathanjames', 'site': 'Instagram'}, {'images': 'https://i.redd.it/twzpvr8g68r41.jpg', 'caption': 'When you put the most effort in, but get the worst result.', 'site': 'Reddit'}, {'images': 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/81252884_165024524838127_4013061155659379165_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=107&_nc_ohc=_vvWU2DX8ZkAX_XQ6lv&oh=5193129e117b9231464f64000a433eba&oe=5EB524E4', 'caption': 'Taking “Being a youtuber” to a whole new level. Changing the mindset bit by bit \n@thestmagazine 📷: @deanchalkley_', 'site': 'Instagram'}, {'images': 'https://i.redd.it/48dykqe0s6r41.png', 'caption': 'Everyone after the new Sidemen Sunday (and rightly so)', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/81160923_447786459444004_4670504375196441299_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=FX2_5gWnY0UAX9pRFUF&oh=d11ea95c7abf9129a9a24f89305c455b&oe=5EB5C881', 'caption': 'Have a Happy New Year 🙌🏿', 'site': 'Instagram'}, {'images': 'https://i.redd.it/iytcn22p07r41.jpg', 'caption': 'Remember those days when he used to call simon a lesbian for red hair', 'site': 'Reddit'}, {'images': 'https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/74661327_580969299139308_2883395766106622935_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=NQCV9ffo_84AX-jLQP-&oh=60b9663f01e2c5119da2de56c3e6dd55&oe=5EB6546A', 'caption': 'From Fifa Gaming to winning A Pro Fight to making waves in the Music Scene...❤️ to all those who always have my back and to the haters... Keep doubting 😈 📷: @dawnkingston', 'site': 'Instagram'}, {'images': 'https://i.redd.it/6vf1ihx2f8r41.jpg', 'caption': 'R.I.P. 10 mil', 'site': 'Reddit'}, {'images': 'https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/73497488_2714371711956942_4077638176908631666_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=106&_nc_ohc=bFESPD9xIuMAX_pbQj1&oh=91531f8649975766e4fc019ee3c07331&oe=5E8DD2CD', 'caption': 'Down Like That Out Now\n\nLink in bio', 'site': 'Instagram'}, {'images': 'https://i.redd.it/44nlml2ei4r41.jpg', 'caption': 'Harry assaulted Ethan and now this', 'site': 'Reddit'}],
            appBarBtns: [
                {
                text: "Login",
                route: "/routerTemp",
            },
            {
                text: "Sign Up",
                route: "",
            },
            {
                text: "About",
                route: "",
            },
        ],
        })
    }
</script>

<style scoped>

</style>