export default {
  name: "src-componentes-alumno-form",
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInicialData(),
      formState: {},
      nombreLengthMin: 5,
      nombreLengthMax: 15,
      edadMin: 18,
      edadMax: 120,
      urlAxios: "https://60ad2d839e2d6b0017459278.mockapi.io/tp4/alumnos",
    };
  },
  computed: {},
  mounted() {},
  methods: {
    getInicialData() {
      return {
        nombre: "",
        edad: "",
        email: "",
      };
    },

    async enviarAsync() {
      console.log({ ...this.formData });
      if (this.formState.$valid) {
        try {
          await this.axios.post(this.urlAxios, this.formData, {
            "content-type": "application/json",
          });
        } catch (err) {
          console.error("ERROR POSTEANDO ALUMNO", err.message);
        }
        this.formData = this.getInicialData();
        this.formState._reset();
      } else {
        alert("Datos invalidos");
      }
    },
    enviarThenCatch() {
      console.log({ ...this.formData });
      if (this.formState.$valid) {
        this.axios
          .post(this.urlAxios, this.formData, {
            "content-type": "application/json",
          })
          .then((respuesta) => {
            console.log("AXIOS POST", respuesta.data);
          })
          .catch((err) => {
            console.error("ERROR POSTEANDO ALUMNO", err.message);
          });

        this.formData = this.getInicialData();
        this.formState._reset();
      } else {
        alert("Datos invalidos");
      }
    },
  },
};
