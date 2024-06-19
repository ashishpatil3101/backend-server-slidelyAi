import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission'; // Import your Submission model/interface

const DB_PATH = path.join(__dirname, '../db.json');

const readSubmissions = (): Submission[] => {
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
};

const writeSubmissions = (submissions: Submission[]): void => {
  fs.writeFileSync(DB_PATH, JSON.stringify(submissions, null, 2));
};

export const ping = (req: Request, res: Response): void => {
  try {
    res.json({ success: true});

  } catch (error) {
    res.json({ success: false});

  }
};

export const submit = (req: Request, res: Response): void => {
  const { Name, Email, Phone, GithubLink, StopwatchTime } = req.body as Submission;

  if (!Name || !Email || !Phone || !GithubLink || !StopwatchTime) {
    res.status(400).json({ error: 'All fields are required.' });
    return; // Ensure the function exits after sending the response
  }

  if (!/^\d+$/.test(Phone)) {
    res.status(400).json({ error: 'Phone number should contain only digits.' });
    return; // Ensure the function exits after sending the response
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
    res.status(400).json({ error: 'Invalid email format.' });
    return; // Ensure the function exits after sending the response
  }

  try {
    const submissions = readSubmissions();
    const newSubmission: Submission = { Name, Email, Phone, GithubLink, StopwatchTime, Id: submissions.length + 1 }; // Assign ID (or use GUID)
    submissions.push(newSubmission);
    writeSubmissions(submissions);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save submission.' });
  }
};

export const read = (req: Request, res: Response): void => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index) || index < 0) {
    res.status(400).json({ error: 'Invalid index.' });
    return; // Ensure the function exits after sending the response
  }

  try {
    const submissions = readSubmissions();

    if (index < submissions.length) {
      res.json(submissions[index]);
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to read submissions.' });
  }
};

export const deleteSubmission = (req: Request, res: Response): void => {
  const index = parseInt(req.query.index as string, 10);

  if (isNaN(index) || index < 0) {
    res.status(400).json({ error: 'Invalid index.' });
    return; // Ensure the function exits after sending the response
  }

  try {
    let submissions = readSubmissions();

    if (index < submissions.length) {
      submissions = submissions.filter((_, i) => i !== index); // Remove submission at index
      writeSubmissions(submissions);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: 'Submission not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete submission.' });
  }
};
