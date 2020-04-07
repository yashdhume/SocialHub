<template>
    <v-app style="background: linear-gradient(130deg, #FF0099, #493240);">
        <AppBar :appBarBtns="appBarBtns"></AppBar>
        <v-container style="width: 620px">
            <v-text-field
                    label="Search"
                    solo
                    light
                    v-model="searchQuery"
                    v-on:keyup.enter="getData"
                    prepend-inner-icon="mdi-magnify"
            ></v-text-field>
        </v-container>
        <section v-if="isDataLoaded">
            <ProfileInfo :data="profileInfo"></ProfileInfo>
            <Posts :data="posts"></Posts>
        </section>



    </v-app>
</template>

<script>
    import AppBar from "@/components/AppBar";
    import Posts from "@/components/Posts";
    import ProfileInfo from "@/components/ProfileInfo";
    import axios from 'axios'
    export default {
        name: "SearchPage",
        components: {AppBar, Posts, ProfileInfo},

        methods:{
            getData: function(){
                axios
                    .get(`http://localhost:3000/search?name=${this.searchQuery}`)
                    .then(r=>{
                        this.posts=r.data.posts;
                        this.profileInfo=r.data.accountInfo;
                        this.isDataLoaded=true;
                    });
            },
        },
        data: ()=>({
            searchQuery:'',
            isDataLoaded: false,
            posts:[],
            profileInfo:[],
            testJson: {"accountInfo":{"reddit":{"followersCount":302991,"userName":"pewdiepie","profilePic":"https://b.thumbs.redditmedia.com/EnkvpFoIsyhWbw8tdyxztpN7aR383pY6fs5HUWmQP6c.jpg"},"instagram":{"followersCount":20963178,"followingCount":125,"profilePic":"https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s320x320/42802192_2147517745488519_3436095027892191232_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=Z-gKpQZXdBcAX-ZxThv&oh=28205cc1e6461399422ac803d45e7c13&oe=5EB609D3","isVerified":true,"userName":"pewdiepie"}},"posts":[{"link":"https://www.youtube.com/watch?v=jEExcR41NTQ","caption":"6 Vegans Vs 1 Meat Eater","timestamp":1586278997,"site":"reddit"},{"link":"https://i.redd.it/komcgs3koer41.jpg","caption":"Well done felix 👊","timestamp":1586269646,"site":"reddit"},{"link":"https://www.reddit.com/r/pewdiepie/comments/fw2y8f/is_pewds_done_playing_subnautica/","caption":"Is pewds done playing Subnautica?","timestamp":1586194181,"site":"reddit"},{"link":"https://www.reddit.com/r/pewdiepie/comments/fw2vx2/anyone_else_want_pewdiepie_to_do_a_skyrim_series/","caption":"anyone else want pewdiepie to do a Skyrim series","timestamp":1586193977,"site":"reddit"},{"link":"https://www.youtube.com/watch?v=DofeZTYjPLg","caption":"DO NOT Ride The New Minecraft Mount!","timestamp":1586192549,"site":"reddit"},{"link":"https://i.redd.it/dzng5cxjh7r41.png","caption":"It's not cake, its Lausanne","timestamp":1586182572,"site":"reddit"},{"link":"https://i.redd.it/zlo4swsxe7r41.png","caption":"pewdiepie flat minimalist logo","timestamp":1586181675,"site":"reddit"},{"link":"https://i.redd.it/oxzycf66a7r41.jpg","caption":"Any one else remember this","timestamp":1586180060,"site":"reddit"},{"link":"https://i.redd.it/6urenpin67r41.png","caption":"Pewdiepie no legs [THEORY]","timestamp":1586178879,"site":"reddit"},{"link":"https://i.redd.it/r1koba3f17r41.jpg","caption":"Uhmmmm, yes","timestamp":1586177123,"site":"reddit"},{"link":"https://v.redd.it/p955iff9v6r41","caption":"The collapse of the 9 week old army.","timestamp":1586175412,"site":"reddit"},{"link":"https://i.redd.it/ak60h7ocw6r41.jpg","caption":"Pewds has been caught growing his legs to long","timestamp":1586175411,"site":"reddit"},{"link":"https://i.redd.it/2hs6678ir6r41.jpg","caption":"It’s been following us since 2017","timestamp":1586173782,"site":"reddit"},{"link":"https://i.redd.it/nht74i78r6r41.jpg","caption":"It has been following us since 2017","timestamp":1586173689,"site":"reddit"},{"link":"https://i.redd.it/3oq98slu96r41.jpg","caption":"Pewdiepie after 3 months in quarantine","timestamp":1586167891,"site":"reddit"},{"link":"https://www.reddit.com/r/pewdiepie/comments/fvu3h0/need_song_name/","caption":"Need song name","timestamp":1586157001,"site":"reddit"},{"link":"https://i.redd.it/ftamridz71r41.png","caption":"The 69th viewer","timestamp":1586106685,"site":"reddit"},{"link":"https://www.youtube.com/watch?v=vHyZfLk2KrU","caption":"I'm Actually TALL! **PROOF**","timestamp":1586106136,"site":"reddit"},{"link":"https://i.redd.it/m21o0o5k31r41.png","caption":"Happiness to the max","timestamp":1586105202,"site":"reddit"},{"link":"https://i.redd.it/fup60gbo11r41.png","caption":"When you press it it says its private? Anyone know whats going on¿","timestamp":1586104562,"site":"reddit"},{"link":"https://i.redd.it/r1t46h8b11r41.jpg","caption":"Did Felix just private a new upload?","timestamp":1586104446,"site":"reddit"},{"link":"https://i.redd.it/cgyb07nb11r41.png","caption":"What's up with the private video?","timestamp":1586104445,"site":"reddit"},{"link":"https://i.redd.it/umpoqb43auq41.jpg","caption":"Sorry if it's bad it's my second post and I'm a bit late","timestamp":1586022642,"site":"reddit"},{"link":"https://i.redd.it/pd2v2llugtq41.jpg","caption":"He was like father to me","timestamp":1586012809,"site":"reddit"},{"link":"https://i.redd.it/thmoyvzsbtq41.png","caption":"yay","timestamp":1586011117,"site":"reddit"},{"link":"https://i.redd.it/dwr5maelusq41.png","caption":"I figured I'd be honest.","timestamp":1586005324,"site":"reddit"},{"link":"https://www.youtube.com/watch?v=yi7KGA_i2r8","caption":"Half Life Alyx (3) is OUT &amp; it's AMAZING!","timestamp":1585001779,"site":"reddit"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/81764191_646846779441052_8792360885235060977_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=mQhQRDHp4xUAX-gkN97&oh=a5a9722c8a8e6389c4851c6ad751337f&oe=5EB708B2","caption":"New tsuki Black edition available, link in bio","timestamp":1578429003,"site":"instagram"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/79171590_644994832701351_4379001960109838875_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=p_zumnSfx14AX92zgzS&oh=d49061c2d7805b1f4900219ae935382d&oe=5EB81150","caption":"Cop my @ugly.christmas gear now and get it by Christmas! Link in bio to shop. #ad","timestamp":1575660380,"site":"instagram"},{"link":"https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/75412707_157641432167256_4443163484438259856_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AdFU4rE2ZDEAX8q283e&oh=2ccd9771d932257b12edc74dd5bf31a4&oe=5EB632A4","caption":"New сука блять merch link in bio!","timestamp":1575302543,"site":"instagram"},{"link":"https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/e35/75362579_1107803549427453_5747249775448912508_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=mMzXWQCQqg4AX9kuVJW&oh=3cef08d59c7012d4c97a48b577af089a&oe=5EB5D798","caption":"Me and mertz @tsuki_market x @gelatopique_usa is launched, check it out on their page. #ad","timestamp":1573670886,"site":"instagram"},{"link":"https://scontent-ort2-2.cdninstagram.com/v/t51.2885-15/e35/72781252_202416437421563_7091260319846359802_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_cat=111&_nc_ohc=UDptZkBDw2UAX-5cdDd&oh=1fb568297452a5253268b9856f8652bd&oe=5EB7CEE2","caption":"Töwer","timestamp":1572700022,"site":"instagram"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/72685620_412460396360980_6195617283643126931_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=16Oi1Ll5SNAAX-dYNE-&oh=ddb79a3bcf2b9aafad0cfc72745067f7&oe=5EB56971","caption":"Jellyfish emoji","timestamp":1572664290,"site":"instagram"},{"link":"https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/72547250_2522758534482847_4441682148655618214_n.jpg?_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=4-Mn4q-jlQcAX-8zoZ3&oh=5094035210c75dcf322c9d6673496a1a&oe=5EB59802","caption":"Happy halloween gamers🎃, we went to Niagara falls💦💦! (I think we were the only ones there lol)","timestamp":1572569456,"site":"instagram"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/74694522_172350340555684_1578736861600130787_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=YPotkiELPLIAX-bq598&oh=21dba79d71cac64490eeb9239828dd40&oe=5EB76F0B","caption":"2 months ago today c:","timestamp":1571509723,"site":"instagram"},{"link":"https://instagram.fymy1-2.fna.fbcdn.net/v/t51.2885-15/e35/70072849_384425855818978_8357236079982830849_n.jpg?_nc_ht=instagram.fymy1-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=avzMzC8ecE0AX867F5Q&oh=7f53a292394eb0697341f12be24d1a67&oe=5EB7A06D","caption":"Last pics from Bali, I stole @roomieofficial 's shorts, don't tell him","timestamp":1567868400,"site":"instagram"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/69227706_531353824298956_4037602174955685563_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ljWYDDMu9LQAX9NTe9M&oh=09896df0036b8aa38307035e955b1fcc&oe=5EB827C7","caption":"Finally got to do surfing for the first time in Bali! I loved it! 🌊🌊🌊","timestamp":1567711767,"site":"instagram"},{"link":"https://instagram.fybz2-2.fna.fbcdn.net/v/t51.2885-15/e35/67560308_148185682946895_3402103537988897903_n.jpg?_nc_ht=instagram.fybz2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=uRNOwkyhDAYAX-zoUax&oh=1296c316cb93bfa21257d31650afc443&oe=5EB517B8","caption":"Thank you @Hiddenretreats for gifting us our honeymoon, we had an unforgettable time in Bali #ad","timestamp":1567701322,"site":"instagram"},{"link":"https://instagram.fymy1-1.fna.fbcdn.net/v/t51.2885-15/e35/67681758_148390516366135_5393851321725614940_n.jpg?_nc_ht=instagram.fymy1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=K7hHYOluntYAX_9JZOG&oh=9229894fd56830a61ae72e5b278b94a0&oe=5EB75ABA","caption":"Back from Honeymoon!","timestamp":1567630201,"site":"instagram"}]},
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