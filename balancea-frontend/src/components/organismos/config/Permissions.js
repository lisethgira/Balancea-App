import { AbilityBuilder } from "@casl/ability";

export default function defineRulesFor(roles, app) {
    const { can, rules } = new AbilityBuilder();

    if (app === "VIAJES") {
        rulesAsignacion(can, roles);
    }

    return rules;
}

const rulesAsignacion = (can, roles) => {
    if (roles) {
        for (let i = 0; i < roles.length; i++) {
            let rol = roles[i].strNombre;

            switch (rol) {
                case "ADMINISTRADOR":
                    can("view", "all");
                    can("view", "Mod_Admin");

                    break;

                case "APROBADOR":
                    can("view", "Mod_Aprobador");
                    break;

                default:
                    break;
            }
        }
    } 
};