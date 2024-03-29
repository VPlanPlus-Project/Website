export function getProfiles() {
    let profiles = [
        { name: "Ack", type: "t" },
        { name: "Ad", type: "t" },
        { name: "Alb", type: "t" },
        { name: "Bau", type: "t" },
        { name: "Ber", type: "t" },
        { name: "Bl", type: "t" },
        { name: "Bü", type: "t" },
        { name: "Czi", type: "t" },
        { name: "De", type: "t" },
        { name: "Do", type: "t" },
        { name: "Dre", type: "t" },
        { name: "Fr", type: "t" },
        { name: "Frö", type: "t" },
        { name: "Gatt", type: "t" },
        { name: "Ger", type: "t" },
        { name: "Gru", type: "t" },
        { name: "Gun", type: "t" },
        { name: "Hau", type: "t" },
        { name: "He", type: "t" },
        { name: "Her", type: "t" },
        { name: "Hö", type: "t" },
        { name: "Hof", type: "t" },
        { name: "Ilg", type: "t" },
        { name: "Irr", type: "t" },
        { name: "Ju", type: "t" },
        { name: "Jü", type: "t" },
        { name: "Kin", type: "t" },
        { name: "Kl", type: "t" },
        { name: "Krü", type: "t" },
        { name: "Leh", type: "t" },
        { name: "Lem", type: "t" },
        { name: "Lu", type: "t" },
        { name: "Mar", type: "t" },
        { name: "Mey", type: "t" },
        { name: "No", type: "t" },
        { name: "Ol", type: "t" },
        { name: "Ot", type: "t" },
        { name: "Pau", type: "t" },
        { name: "Ra", type: "t" },
        { name: "Re", type: "t" },
        { name: "Red", type: "t" },
        { name: "Rei", type: "t" },
        { name: "Ri", type: "t" },
        { name: "Ru", type: "t" },
        { name: "Sa", type: "t" },
        { name: "Sei", type: "t" },
        { name: "Sipp", type: "t" },
        { name: "Snei", type: "t" },
        { name: "Spe", type: "t" },
        { name: "Srei", type: "t" },
        { name: "Stei", type: "t" },
        { name: "Tau", type: "t" },
        { name: "Tei", type: "t" },
        { name: "Tipp", type: "t" },
        { name: "Uhl", type: "t" },
        { name: "Ung", type: "t" },
        { name: "Vo", type: "t" },
        { name: "Wi", type: "t" },
        { name: "Wün", type: "t" },
        { name: "Ze", type: "t" },
        { name: "Zo", type: "t" },
        { name: "Zu", type: "t" },
        { name: "Zub", type: "t" },
    ]
    for (let i = 1; i <= 10; i++) {
        profiles.push({ name: i +"a", type: "c"})
        profiles.push({ name: i +"b", type: "c"})
        profiles.push({ name: i +"c", type: "c"})
        profiles.push({ name: i +"d", type: "c"})
    }

    profiles.push(
        { name: "005a", type: "r" },
        { name: "010a", type: "r" },
        { name: "010b", type: "r" },
        { name: "05b", type: "r" },
        { name: "06a", type: "r" },
        { name: "06b", type: "r" },
        { name: "106a", type: "r" },
        { name: "106b", type: "r" },
        { name: "109a", type: "r" },
        { name: "109b", type: "r" },
        { name: "110a", type: "r" },
        { name: "110b", type: "r" },
        { name: "118b", type: "r" },
        { name: "17a", type: "r" },
        { name: "17b", type: "r" },
        { name: "18a", type: "r" },
        { name: "18b", type: "r" },
        { name: "210b", type: "r" },
        { name: "211a", type: "r" },
        { name: "211b", type: "r" },
        { name: "214a", type: "r" },
        { name: "214b", type: "r" },
        { name: "215a", type: "r" },
        { name: "215b", type: "r" },
        { name: "218a", type: "r" },
        { name: "218b", type: "r" },
        { name: "306a", type: "r" },
        { name: "306b", type: "r" },
        { name: "309a", type: "r" },
        { name: "309b", type: "r" },
        { name: "310a", type: "r" },
        { name: "TH1", type: "r" },
        { name: "TH2", type: "r" },
        { name: "TH3", type: "r" },
    )

    return profiles
}