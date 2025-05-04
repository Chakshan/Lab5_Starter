// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber Tests
test("normal phone number should be true", () => {
  expect(isPhoneNumber("238-452-8482")).toBe(true);
});

test("phone number with space should be true", () => {
  expect(isPhoneNumber("238 452-8482")).toBe(true);
});

test("letters should not be phone number", () => {
  expect(isPhoneNumber("hello")).toBe(false);
});

test("symbols and numbers should not be phone number", () => {
  expect(isPhoneNumber("32(*^(^234)*^2")).toBe(false);
})


// isEmail tests
test("normal email should be true", () => {
  expect(isEmail("joe@gmail.com")).toBe(true);
});

test("email with capital letters should be true", () => {
  expect(isEmail("JOE@gmail.com")).toBe(true);
});

test("random string should not be email", () => {
  expect(isEmail("asla2fas2g")).toBe(false);
});

test("no TLD should not be email", () => {
  expect(isEmail("joe.bob@gmail")).toBe(false);
});


// isStrongPassword tests
test("4 characters is a strong password", () => {
  expect(isStrongPassword("alsk")).toBe(true);
});

test("15 characters is a strong password", () => {
  expect(isStrongPassword("asdfghjklpoiuyt")).toBe(true);
});

test("first character must be letter", () => {
  expect(isStrongPassword("2asdf")).toBe(false);
});

test("no special characters in password", () => {
  expect(isStrongPassword("a@#(*&")).toBe(false);
});

// isDate tests
test("normal date should be true", () => {
  expect(isDate("12/28/2023")).toBe(true);
});

test("single digit day and month is a date", () => {
  expect(isDate("2/8/2023")).toBe(true);
});

test("year must be 4 digits", () => {
  expect(isDate("12/18/23")).toBe(false);
});

test("random string is not a date", () => {
  expect(isDate("asdfas")).toBe(false);
});


// isHexColor tests
test("normal hex color should be true", () => {
  expect(isHexColor("#1A03EC"));
});

test("3 character hex color should be true", () => {
  expect(isHexColor("#10E"));
});

test("string doesn't start with # is not hex color", () => {
  expect(isHexColor("adf"));
});

test("string with characters after f is not hex color", () => {
  expect(isHexColor("#alsfez"));
});
