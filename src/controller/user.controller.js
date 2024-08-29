class UserController {
    async getHelloWorld(ctx, next) {
        ctx.body = 'Hello World';
    }
}
const userController = new UserController();
export const {
    getHelloWorld
} = userController;
