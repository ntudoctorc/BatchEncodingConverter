import { Service, Encoding } from "../Services/Service";

export class ServiceProvider {


    public provide(pattern: ServiceType): Service {
        if (pattern === ServiceType.SJIStoUTF8) {
            return new Service({srcEncoding: Encoding.Shift_JIS, distEncoding: Encoding.UTF8});
        }
        if (pattern === ServiceType.UTF8toSJIS) {
            return new Service({srcEncoding: Encoding.UTF8, distEncoding: Encoding.Shift_JIS});
        }
        if (pattern === ServiceType.Big5toUTF8) {
            return new Service({srcEncoding: Encoding.Big5, distEncoding: Encoding.UTF8});
        }
        if (pattern === ServiceType.UTF8toBig5) {
            return new Service({srcEncoding: Encoding.UTF8, distEncoding: Encoding.Big5});
        }
        return new Service({srcEncoding: Encoding.Shift_JIS, distEncoding: Encoding.UTF8});
    }
}



export enum ServiceType {
    "SJIStoUTF8",
    "UTF8toSJIS",
    "Big5toUTF8",
    "UTF8toBig5"
}