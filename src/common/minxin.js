import ScrollToTop from "@/components/common/scrollToTop/ScrollToTop";
import Loading from "@/components/common/loading/Loading";
import until from '@/common/untils'
export const backToTop = {
    data() {
        return {
            scropTopIsHide: false,

        }
    },
    mounted() {
        this.$refs.scroll.bsScroll.on('scroll', (cord) => {
            const coordY = Math.abs(cord.y);
            //返回顶部
            if (coordY > this.$refs.scroll.$el.clientHeight) {
                this.scropTopIsHide = true;
            } else {
                this.scropTopIsHide = false;
            }
        })
    },
    methods: {
        scrollToTopHandle() {
            this.$refs.scroll.bsScroll.scrollTo(0, 0, 500);
        },
    },
    components: {
        ScrollToTop,
        Loading
    }


};
export const loading = {
    data() {
        return {
            loading: false,
        }
    },
    components: {
        Loading
    }
}
export const imgLoadingRefresh = {
    data() {
        return {
            refreshFn: null,
            requestRefresh: null
        }
    },
    mounted() {
        this.refreshFn = until.debounce(this.$refs.scroll.bsScroll, this.$refs.scroll.bsScroll.refresh, 200)
        this.requestRefresh = () => this.refreshFn();
        this.$bus.$on('requestRefresh', this.requestRefresh)
    },

    destroyed() {
        this.$bus.$off('requestRefresh', this.requestRefresh)
    },
}