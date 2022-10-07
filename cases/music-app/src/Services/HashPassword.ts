import * as bcrypt from "bcryptjs";

export default class HashPassword {
    generateHash = async (password: string): Promise<string> => {
        const rounds = Number(process.env.HASH_COUNT);
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(password, salt);

        return result;
    };

    compareHash = async (password: string, hash: string): Promise<boolean> => {
        return bcrypt.compare(password, hash);
    };
};