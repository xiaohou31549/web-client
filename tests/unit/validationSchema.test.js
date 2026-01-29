import { describe, expect, it } from 'vitest';

import { emailSchema, firstNameSchema, lastNameSchema, otpSchema, passwordSchema, phoneSchema } from '@/utils/validationSchema';

describe('validationSchema', () => {
  it('validates common email formats', () => {
    expect(emailSchema.pattern.value.test('user@example.com')).toBe(true);
    expect(emailSchema.pattern.value.test('invalid-email')).toBe(false);
  });

  it('validates name formats', () => {
    expect(firstNameSchema.pattern.value.test('Jane')).toBe(true);
    expect(lastNameSchema.pattern.value.test('Doe Smith')).toBe(true);
    expect(lastNameSchema.pattern.value.test('Doe-123')).toBe(false);
  });

  it('validates phone and otp constraints', () => {
    expect(phoneSchema.pattern.value.test('555-123-4567')).toBe(true);
    expect(phoneSchema.pattern.value.test('abc')).toBe(false);
    expect(otpSchema.minLength.value).toBe(6);
    expect(passwordSchema.minLength.value).toBe(8);
  });
});
