import React from "react";
import "./css/ProfileEdit.module.css";

const ProfileEdit: React.FC = () => {
    return (
        <div className="profile-edit-container">
            <div className="sidebar">
                <h3>Manage My Account</h3>
                <ul>
                    <li className="active">My Profile</li>
                    <li>Address Book</li>
                    <li>My Payment Options</li>
                </ul>
                <h3>My Orders</h3>
                <ul>
                    <li>My Returns</li>
                    <li>My Cancellations</li>
                </ul>
                <h3>My WishList</h3>
            </div>
            <div className="profile-edit-form">
                <h2>Edit Your Profile</h2>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value="Md" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value="Rimel" readOnly />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value="rimel111@gmail.com"
                            readOnly
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            value="Kingston, 5236, United State"
                            readOnly
                        />
                    </div>
                    <h3>Password Changes</h3>
                    <div className="form-group">
                        <label>Current Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-group">
                        <label>New Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input type="password" />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-button">
                            Cancel
                        </button>
                        <button type="submit" className="save-button">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEdit;
