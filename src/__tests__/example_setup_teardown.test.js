describe("setup and teardown examples", () => {
	//beforeAll is a method that is going to be executed before the tests
	beforeAll(() => {
		console.log("beforeAll");
	});

	beforeEach(() => {
		console.log("beforeEach");
	});

	afterAll(() => {
		console.log("afterAll");
	});
	afterEach(() => {
		console.log("afterEach");
	});
	test("example1", () => {
		expect(true).toBe(true);
	});
	test("example2", () => {
		expect(true).toBe(true);
	});
});
